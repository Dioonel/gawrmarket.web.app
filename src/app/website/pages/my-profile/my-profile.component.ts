import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  loading = true;
  faXmark = faXmark;
  user!: User;

  constructor(private dataService: DataService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getMyProfile().subscribe(data => {
      console.log(data);
      this.user = data;
      this.loading = false;

      if(this.user?.message === 'Please login first'){
        this.router.navigate(['/login']);
      }
    });
  }

  logout(){
    if(window.confirm('Are you sure you want to logout?')){
      setTimeout(() => {
        this.cookie.deleteAll();
        sessionStorage.removeItem('jwt');
        window.location.href = '/';
      }, 250);
    }
  }
}
