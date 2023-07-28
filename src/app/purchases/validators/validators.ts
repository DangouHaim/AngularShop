import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[emailRegEx]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailRegExValidatorDirective, multi: true}]
  })
  export class EmailRegExValidatorDirective implements Validator {
    emailRegEx = /^[A-Za-z0-9+_.-]+@(.+)$/;
    @Input('emailRegEx') control!: AbstractControl;

    ngAfterViewInit(): void {
        if (this.control) {
            const oldValidator = this.control.validator;
            if (oldValidator) {
                this.control.setValidators([regExValidator(this.emailRegEx), oldValidator]);
                return;
            }
            this.control.setValidators([regExValidator(this.emailRegEx)]);
        }
    }
  
    validate(control: AbstractControl): ValidationErrors | null {
      return this.control ? regExValidator(this.emailRegEx)(control) : null;
    }
  }

export function regExValidator(regEx: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = regEx.test(control.value);
        return !match ? {match: {value: control.value}} : null;
    };
}

export function deliveryAddressValidator(formGroup: AbstractControl) : ValidationErrors | null {    
    if (!formGroup) {
        return null;
    }
    
    if (formGroup.value.delivery) {
        return !formGroup.value.deliveryAddress ? {deliveryAddress:true} : null;
    }
  
    return null;
  }
  
  export function firstNameValidator(control:AbstractControl) : ValidationErrors | null {
    const value = control.value;
  
        if (!value) {
            return {firstNameRequired:true};
        }
  
        const startsWithUpperCase = /^[A-Z].*$/.test(value);
  
        return !startsWithUpperCase ? {startsWithUpperCase:true}: null;
  }