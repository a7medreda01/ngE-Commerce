import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  Message: string = '';
  constructor(private registerService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])});


submitLogin(form: FormGroup) {
      // this.submitted = true;
      console.log(this.loginForm)

      if (this.loginForm.invalid) return;

      const body = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.registerService.login(body).subscribe({
        next: (res) => {
          console.log(res)
          localStorage.setItem('token', res.userData.token);
          localStorage.setItem('userId', res.userData.userId);
          this.Message = "Login Success"
          setTimeout(() => {
            this.router.navigate(['']);
          }, 800);
        },
        error: (err) => console.error('Registration failed:', err),
      });
    }

  }
