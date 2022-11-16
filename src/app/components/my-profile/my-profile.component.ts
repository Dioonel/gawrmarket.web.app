import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';
import { User } from './../../../app/models/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user!: User;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMyProfile().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

}
