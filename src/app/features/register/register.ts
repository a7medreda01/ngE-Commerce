import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   Message: string = '';
constructor(private registerService :AuthService,private router :Router){}

  registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      phone: new FormControl('',[Validators.pattern(/^\d{10,15}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, { validators: this.passwordMatchValidator });
  

passwordMatchValidator (control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password && confirm && password !== confirm ? { notMatch: true } : null;
}

submitRegister(form : FormGroup) {
    // this.submitted = true;
    console.log(this.registerForm)
    console.log(this.registerForm.status)
    if (this.registerForm.invalid) return;

  const  body = {
    email: this.registerForm.get('email')?.value,
    password: this.registerForm.get('password')?.value,
    confirmPassword: this.registerForm.get('confirmPassword')?.value,
    fullName :this.registerForm.get('name')?.value,
    phoneNumber :this.registerForm.get('phone')?.value,
  };

  this.registerService.register(body).subscribe({
      next: (res) => {
      localStorage.setItem('token', res.userData.token);
      localStorage.setItem('userId', res.userData.userId);
      this.Message= "Register Success"
      setTimeout(() => {
      this.router.navigate(['']);
      }, 1000);
      },
      error: (err) => console.error('Registration failed:', err),
    });
}

}
