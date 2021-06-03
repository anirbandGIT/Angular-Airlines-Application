import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  public passengerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // data model
    this.passengerForm = this.formBuilder.group({
      name: '',
      email: '',
      phoneNumber: '',
      gender: '',
      dob: '',
      address: this.formBuilder.array([]),
    });

    this.addAddressFormElement();

    this.passengerForm.valueChanges.subscribe(console.log);
  }

  public get addressFormArray(): FormArray {
    return this.passengerForm.get('address') as FormArray;
  }

  public addAddressFormElement(): void {
    const addressForm = this.formBuilder.group({
      city: '',
      country: '',
      address: '',
      zip: '',
    });

    this.addressFormArray.push(addressForm);
  }

  public deleteAddressFormElement(index: number): void {
    this.addressFormArray.removeAt(index);
  }
}
