import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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

  constructor(private dataService: DataService, private cookie: CookieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.username = this.cookie.get('username');
  }

  ngOnInit(): void {
  }

  search() {
    if(this.searchContent.length > 0) {
      this.activatedRoute.queryParams.subscribe(params => {
        let myQuery: Params = {};
        if(params['minPrice']) {
          myQuery['minPrice'] = params['minPrice'];
        }
        if(params['maxPrice']) {
          myQuery['maxPrice'] = params['maxPrice'];
        }
        myQuery['title'] = this.searchContent;
        this.router.navigate(['/timeline'], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
      });
    }
  }
}
