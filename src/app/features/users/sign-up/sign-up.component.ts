import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  formSignup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.user = new User();
    this.initializeForm();
  }

  initializeForm(): void {
    this.formSignup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-*/+@])[A-Za-z\d\-*/+@]{8,}$/)
      ]],
      phones: this.fb.array([this.createPhoneGroup()]),
      addresses: this.fb.array([this.createAddressGroup()])
    });
  }

  createPhoneGroup(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{10,}$/)]]
    });
  }

  get phones(): FormArray {
    return this.formSignup.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phones.push(this.createPhoneGroup());
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: ['']
    });
  }

  get addresses(): FormArray {
    return this.formSignup.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.createAddressGroup());
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  hasUpperCase(): boolean {
    const password = this.formSignup.get('password')?.value;
    return /[A-Z]/.test(password);
  }

  hasLowerCase(): boolean {
    const password = this.formSignup.get('password')?.value;
    return /[a-z]/.test(password);
  }

  hasNumber(): boolean {
    const password = this.formSignup.get('password')?.value;
    return /\d/.test(password);
  }

  hasSpecialChar(): boolean {
    const password = this.formSignup.get('password')?.value;
    return /[-*/+@]/.test(password);
  }

  save(): void {
    if (this.formSignup.valid) {
      this.user = this.formSignup.value;
      console.log('User data:', this.user);
    } else {
      this.markFormGroupTouched(this.formSignup);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
}