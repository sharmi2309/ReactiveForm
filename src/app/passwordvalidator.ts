import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordValidator(first: string, second: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(first)?.value;
    const confirmPassword = formGroup.get(second)?.value;

    if (password !== confirmPassword) {
      return { mismatch: true };
    }

    return null;
  }
}
