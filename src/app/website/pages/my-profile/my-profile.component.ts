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

  deletePost(postId: string){
    if(postId){
      this.dataService.deletePost(postId).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
  }

  deleteAccount(){
    if(window.confirm('Are you sure you want to delete your account?')){
      this.dataService.deleteMyProfile().subscribe(data => {
        console.log(data);
        if(data){
          this.cookie.delete('user_id');
          this.cookie.delete('username');
          sessionStorage.removeItem('jwt');
          window.location.href = '/';
        }
      });
    }
  }
}
