import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class signupcomponent implements OnInit {
  signupForm!: FormGroup;
  registerForm!: FormGroup;
  myGroup!: FormGroup;
  activeForm:  'login'|'signup'='signup';
  submittedEmail: string = '';


  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.myGroup = new FormGroup({
      
      signup: this.signupForm,
    });
  }

  toggleForm(form:   'signup') {
    this.activeForm = form;
  }

 

  signup() {
    if (this.signupForm.valid) {
      console.log('signup form==>', this.signupForm.value);
      // Store email
      this.submittedEmail = this.signupForm.value.email;
      this.router.navigate(['']);
    } else {
      alert('Please Enter the Valid Details.');
    }
  }
  onsignupSubmit() {
    // Handle register form submission
  this.signup();
  }



}



  


 