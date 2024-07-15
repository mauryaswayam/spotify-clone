import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  myGroup!: FormGroup;

  // Store email
  submittedEmail: string = '';

  // Check form status
  activeForm: 'login' | 'signup' = 'login';
  constructor(private fb: FormBuilder,private router:Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.myGroup = new FormGroup({
      login: this.loginForm,
      signup: this.signupForm
    });
  }

  toggleForm(form: 'login' | 'signup'): void {
    this.activeForm = form;
    if (form === 'signup') {
      this.router.navigate(['./signup']);
    } else {
      this.router.navigate(['./login']);
    }
  }



  login() {
    if (this.loginForm.valid) {
      if(this.loginForm.value.email =='admin123@gmail.com' && this.loginForm.value.password ==258 ){
        this.router.navigate(['/home']);
      }else {
        alert("Please Enter the Valid Details.");
      }
    } 
  }

  onNavigateLogin() {
    this.login();
  }
}