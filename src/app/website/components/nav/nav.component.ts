import { Component, OnInit } from '@angular/core';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchContent!: string;
  username!: string;
  faSearch = faSearch;
  faCartShopping = faCartShopping;
  hideBtns!: boolean;
  routeSuscription!: Subscription;

  constructor(private dataService: DataService, private cookie: CookieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.username = this.cookie.get('username');
    this.searchContent = '';
    this.hideBtns = false;
  }

  ngOnInit(): void {}

  search() {
    if(this.searchContent.length > 0) {
      this.routeSuscription = this.activatedRoute.queryParams.subscribe(params => {
        let myQuery: Params = {};
        if(params['minPrice']) {
          myQuery['minPrice'] = params['minPrice'];
        }
        if(params['maxPrice']) {
          myQuery['maxPrice'] = params['maxPrice'];
        }
        myQuery['title'] = this.searchContent;
        if(this.searchContent.length > 0) {
          this.searchContent = '';
          this.router.navigate(['timeline'], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
        }
        setTimeout(() => {
          this.hideBtns = false;
          this.routeSuscription.unsubscribe();
        }, 500);
      });
    }
  }

  focus() {
    const width = window.innerWidth;
    if(width < 660) {
      this.hideBtns = true;
    }
  }

  unfocus() {
    if(this.searchContent.length === 0) {
      this.hideBtns = false;
    }
  }

  navigating() {
    this.searchContent = '';
    this.hideBtns = false;
  }
}
