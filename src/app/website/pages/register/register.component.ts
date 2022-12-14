import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  error = false;

  constructor(private dataService: DataService, private cookie: CookieService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      c_password: ['', [Validators.required]],
    });
    this.form.addValidators(
      this.matchValidator(this.form.controls['password'], this.form.controls['c_password'])
    );
  }

  ngOnInit(): void {
  }

  register() {
    if(this.form.valid) {
      let user = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value,
        age: null,
        image: 'https://i.pinimg.com/736x/d0/a9/28/d0a928800a63f30c9de32934b4db78c4.jpg',
      }
      this.dataService.createUser(user).subscribe(data => {
        if(data !== null){
          console.log(data);
          this.dataService.login(user.username, user.password).subscribe(loginData => {
            sessionStorage.setItem('jwt', loginData.token);
            this.cookie.set('user_id', loginData.user._id);
            this.cookie.set('username', loginData.user.username);
            location.href = '/my-profile';
          });
        }
      }, error => {
        console.log('error error');
        this.error = true;
      });
    }
  }

  matchValidator(control: AbstractControl, controlTwo: AbstractControl): ValidatorFn {
    return () => {
      if (control.value !== controlTwo.value) return { match: 'Value does not match' };
      return null;
    };
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].markAsDirty();
    });
  }
}
