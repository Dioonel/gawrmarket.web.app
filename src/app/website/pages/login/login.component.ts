import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error = false;

  constructor(private dataService: DataService, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.dataService.login(this.username, this.password).subscribe(data => {
      if(data !== null){
        console.log(data);
        sessionStorage.setItem('jwt', data.token);
        this.cookie.set('user_id', data.user._id);
        this.cookie.set('username', data.user.username);
        location.href = '';
      } else {
        console.log('error')
      }
    });
  }

  loginError(){
    this.error = true;
  }
}
