import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['password'] && group.controls['rePassword']) {
        isValid = group.controls['password'].value == group.controls['rePassword'].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      return { 'passwordCheck': 'failed' }
    }
  }
}

@Directive({
  selector: '[appPasswordCheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordCheckDirective, multi: true }]
})
export class PasswordCheckDirective implements Validator {
  private valFn;

  constructor() {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }

}
