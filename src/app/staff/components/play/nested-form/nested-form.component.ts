import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent implements OnInit, OnDestroy {
  public passengerForm: FormGroup;
  public passengerFormSubscription: Subscription;
  public errorMessagesCollection = {
    name: {
      required: 'Name is required.',
    },
    email: {
      required: 'Email is required',
      email: 'Entered email is not in valid format',
    },
  };
  public formErrorsCollection = {
    name: '',
    email: '',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initialiseFormGroup();
    this.passengerFormSubscription = this.passengerFormValueChanges;
    // this.logPassengerFormControlKeyValuePair(this.passengerForm);
  }

  ngOnDestroy() {
    this.passengerFormSubscription.unsubscribe();
  }

  public initialiseFormGroup(): void {
    // formBuilder is syntactical sugar
    const contactInformation = this.formBuilder.group({
      email: [
        'Jane.Doe@someemail.com',
        [Validators.required, Validators.email],
      ],
      phoneNumber: ['', [Validators.minLength(6), Validators.maxLength(12)]],
    });
    const addressInformation = this.formBuilder.group({
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zip: [null, [Validators.required]],
    });

    this.passengerForm = this.formBuilder.group({
      name: ['Jane Doe', [Validators.required]],
      contactInformation: contactInformation,
      gender: 'Female',
      dob: [new Date(), [Validators.required]],
      primaryAddress: addressInformation,
      secondaryAddress: addressInformation,
    });

    // this.passengerForm.valueChanges.subscribe(console.log);
    // this.passengerForm.valueChanges.subscribe((_) =>
    //   console.log(this.passengerForm)
    // );
  }

  public logPassengerFormControlKeyValuePair(formGroup: FormGroup): void {
    console.log(Object.keys(formGroup.controls));
    Object.keys(formGroup.controls).forEach((key: string) => {
      if (formGroup.get(key) instanceof FormGroup) {
        this.logPassengerFormControlKeyValuePair(
          formGroup.get(key) as FormGroup
        );
      } else {
        console.log(key, formGroup.get(key).value);
      }
      // console.log(key, formGroup.get(key));
    });
  }

  public checkPassengerFormErrors(
    formGroup: FormGroup = this.passengerForm
  ): void {
    Object.keys(formGroup.controls).forEach((key: string) => {
      if (formGroup.get(key) instanceof FormGroup) {
        this.checkPassengerFormErrors(formGroup.get(key) as FormGroup);
      } else {
        if (
          formGroup.get(key) &&
          !formGroup.get(key).valid &&
          formGroup.get(key).touched &&
          this.errorMessagesCollection.hasOwnProperty(key) &&
          this.formErrorsCollection.hasOwnProperty(key)
        ) {
          this.formErrorsCollection[key] = '';
          // formGroup.get(key) && formGroup.get(key).invalid)
          const errorMessage = this.errorMessagesCollection[key];
          // console.log(formGroup.get(key).errors); // which error has occured for key

          for (const errorKey in formGroup.get(key).errors) {
            this.formErrorsCollection[key] = errorMessage[errorKey]; // show only one error
            // this.formErrorsCollection[errorKey] +=
            //   errorMessage[errorKey] + '<br>'; // show all error
          }
        }
      }
    });
  }

  public get passengerFormValueChanges(): Subscription {
    const subscription = this.passengerForm.valueChanges.subscribe((value) => {
      // console.log(value)
      this.checkPassengerFormErrors();
      console.log(this.formErrorsCollection);
    });
    return subscription;
  }

  // getters
  public get name(): AbstractControl {
    return this.passengerForm.get('name');
  }
  public get email(): AbstractControl {
    return this.passengerForm.get('contactInformation').get('email');
  }
}
