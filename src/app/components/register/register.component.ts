import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { DataService } from './../../../app/services/data.service';

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

  constructor(private dataService: DataService) { }

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
          sessionStorage.setItem('jwt', loginData);
          location.href = '/my-profile';
        });
      });
    }
  }
}
