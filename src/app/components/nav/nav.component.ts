import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchContent = '';
  username = '';
  faSearch = faSearch;

  constructor(private dataService: DataService, private cookie: CookieService) {
    this.username = this.cookie.get('username');
  }

  ngOnInit(): void {
  }

  search() {
    if(this.searchContent.length > 0) {
      location.href = `/timeline?title=${this.searchContent}`;
    }
  }
}
