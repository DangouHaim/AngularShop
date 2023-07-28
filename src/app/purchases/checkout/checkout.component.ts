import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutModel } from '../models/checkout-model';
import { deliveryAddressValidator, firstNameValidator, regExValidator } from '../validators/validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  checkoutModel = new CheckoutModel();
  fields = [{id: 'phone', label: 'phone', value: 1}];
  checkoutForm = this.formBuilder.group({
    firstName: ['', [firstNameValidator]],
    lastName: '',
    email: ['', regExValidator(/^[A-Za-z0-9+_.-]+@(.+)$/)],
    phones: this.formBuilder.array([]),
    delivery: false,
    deliveryAddress: '',
  }, {validators: deliveryAddressValidator})!;

  get firstName(): AbstractControl {
    return this.checkoutForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.checkoutForm.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.checkoutForm.get('email')!;
  }

  get phones() {
    return this.checkoutForm.controls["phones"] as FormArray;
  }

  get delivery(): AbstractControl {
    return this.checkoutForm.get('delivery')!;
  }

  get deliveryAddress(): AbstractControl {
    return this.checkoutForm.get('deliveryAddress')!;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSave() {
    console.log(JSON.stringify(this.checkoutForm.value));
  }

  addPhone() {
    const phoneForm = this.formBuilder.group({
      phone: ['', Validators.required]
    });
  
    this.phones.push(phoneForm);
  }

  removePhone() {
    if (this.phones.length < 1) {
      return;
    }

    this.phones.removeAt(this.phones.length - 1);
  }
  
  toFormGroup(control: AbstractControl) {
    console.log(JSON.stringify(this.getErrors()));
    return control as FormGroup;
  }

  toFormControl(control: AbstractControl, field: string) {
    return (control as FormGroup).get(field) as FormControl;
  }

  getErrors() {
    return [
      this.firstName.errors?.['firstNameRequired'] ? "First name is required": null,
      this.firstName.errors?.['startsWithUpperCase'] ? "First name should start with capital leter": null,
      this.checkoutForm.errors?.['deliveryAddress'] ? "Delivery address is required" : null,
      !this.phones.valid ? "Phones is required" : null,
      !this.email.valid ? "Email is required" : null,
    ];
  }
}
