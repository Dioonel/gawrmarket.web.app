import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  age!: number;
  image!: string;

  constructor(private dataService: DataService, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  createUser(){
    if(this.username && this.password){
      let user = {
        username: this.username,
        password: this.password,
        age: this.age || null,
        image: this.image || null,
      }
      console.log(user);
      this.dataService.createUser(user).subscribe(data => {
        this.dataService.login(this.username, this.password).subscribe(loginData => {
          sessionStorage.setItem('jwt', loginData.token);
          this.cookie.set('user_id', loginData.user._id);
          this.cookie.set('username', loginData.user.username);
          location.href = '/my-profile';
        });
      });
    }
  }
}
