import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  // FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription, of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IFormGuard } from '../../../../core/helpers/guards/form.guard';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit, OnDestroy, IFormGuard {
  public passengerForm: FormGroup;
  public formSubmitted: boolean = false;
  public formIsLoading: boolean = false;
  private genderSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initialiseFormGroup();
    this.logPassengerFormControlKeyValuePair(this.passengerForm);
    this.genderSubscription = this.genderControlValueChanges;
  }

  ngOnDestroy() {
    this.genderSubscription.unsubscribe();
  }

  public initialiseFormGroup(): void {
    // formBuilder is syntactical sugar
    this.passengerForm = this.formBuilder.group({
      name: ['Jane Doe', [Validators.required]],
      email: [
        'Jane.Doe@someemail.com',
        [Validators.required, Validators.email],
      ],
      phoneNumber: ['', [Validators.minLength(6), Validators.maxLength(12)]],
      gender: 'Female',
      dob: [new Date(), [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zip: [null, [Validators.required]],
      termsAccepted: [false, [Validators.requiredTrue]],
    });

    // this.passengerForm = new FormGroup({
    //   name: new FormControl('Anirban Das', [Validators.required]),
    //   email: new FormControl('allmail.anirban@gmail.com', [
    //     Validators.required,
    //     Validators.email,
    //   ]),
    //   phoneNumber: new FormControl('', [
    //     Validators.minLength(6),
    //     Validators.maxLength(12),
    //   ]),
    //   gender: new FormControl('Male'),
    //   dob: new FormControl(new Date(), [Validators.required]),
    //   city: new FormControl('', [Validators.required]),
    //   country: new FormControl('', [Validators.required]),
    //   address: new FormControl('', [Validators.required]),
    //   zip: new FormControl(null, [Validators.required]),
    //   termsAccepted: new FormControl(false, [Validators.requiredTrue]),
    // });

    // this.passengerForm.valueChanges.subscribe(console.log);
    // this.passengerForm.valueChanges.subscribe(_ => console.log(this.passengerForm));
  }

  public setFormData(): void {
    // setValue will update all formControls, for partial update use patchValue
    this.passengerForm.setValue({
      name: 'John Doe',
      email: 'John.Doe@someemail.com',
      phoneNumber: '905-385-4400',
      gender: 'Male',
      dob: new Date(),
      city: 'Anchorage',
      country: 'Alaska',
      address: '639 Main St',
      zip: 4456,
      termsAccepted: false,
    });
  }

  public patchFormData(): void {
    // setValue will update all formControls, for partial update use patchValue
    this.passengerForm.patchValue({
      name: 'Jane Doe',
      email: 'Jane.Doe@someemail.com',
      phoneNumber: '332-385-4400',
      gender: 'Female',
      dob: new Date(),
      city: 'Anchorage',
      country: 'Alaska',
      address: '639 Main St',
      zip: 4456,
    });
  }

  public async submitForm(): Promise<any> {
    this.formIsLoading = true;
    const delayTime = 3000;
    const formData = this.passengerForm.value;

    try {
      // await as needed
      const submittedFormData = await of(formData).pipe(delay(delayTime)); // no effect but using
      console.log('submittedFormData', submittedFormData);
    } catch (error) {
      console.error(error);
    }
    this.formIsLoading = false;
  }

  // looping through formGroup controls
  public logPassengerFormControlKeyValuePair(formGroup: FormGroup): void {
    console.log(Object.keys(formGroup.controls));
    Object.keys(formGroup.controls).forEach((key: string) => {
      if (formGroup.get(key) instanceof FormGroup) {
        this.logPassengerFormControlKeyValuePair(
          formGroup.get(key) as FormGroup
        );
      } else {
        console.log(key, formGroup.get(key).value);
        // for disabling
        formGroup.get(key).disable();
      }
      // console.log(key, formGroup.get(key));
    });
  }

  // subscriptions for passengerForm control
  public get genderControlValueChanges(): Subscription {
    const subscription = this.passengerForm
      .get('gender')
      .valueChanges.subscribe((value) => console.log(value));
    return subscription;
  }
  // getters
  public get name(): AbstractControl {
    // return this.passengerForm.controls.name;
    return this.passengerForm.get('name');
  }
  public get email(): AbstractControl {
    return this.passengerForm.get('email');
  }
  public get phoneNumber(): AbstractControl {
    return this.passengerForm.get('phoneNumber');
  }
  public get gender(): AbstractControl {
    return this.passengerForm.get('gender');
  }
  public get dob(): AbstractControl {
    return this.passengerForm.get('dob');
  }
  public get city(): AbstractControl {
    return this.passengerForm.get('city');
  }
  public get country(): AbstractControl {
    return this.passengerForm.get('country');
  }
  public get address(): AbstractControl {
    return this.passengerForm.get('address');
  }
  public get zip(): AbstractControl {
    return this.passengerForm.get('zip');
  }
  public get termsAccepted(): AbstractControl {
    return this.passengerForm.get('termsAccepted');
  }

  canLeaveForm(): Observable<boolean> | boolean {
    if (!this.formSubmitted) {
      return window.confirm('There are unsaved changes! Are you sure?');
    }
    return true;
  }
}
