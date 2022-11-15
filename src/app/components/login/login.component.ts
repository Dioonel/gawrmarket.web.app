import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from './../../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.dataService.login(this.username, this.password).subscribe(data => {
      if(data !== null){
        console.log(data);
        sessionStorage.setItem('jwt', data);
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
