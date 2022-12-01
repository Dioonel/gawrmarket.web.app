import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error = false;

  constructor(private dataService: DataService, private cookie: CookieService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  login(){
    if(this.form.valid){
      this.dataService.login(this.form.get('username')?.value, this.form.get('password')?.value).subscribe(data => {
        console.log(data);
        sessionStorage.setItem('jwt', data.token);
        this.cookie.set('user_id', data.user._id);
        this.cookie.set('username', data.user.username);
        location.href = '/my-profile';
      }, error => {
        console.log('error error')
        this.error = true;
      });
    }
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].markAsDirty();
    });
  }
}
