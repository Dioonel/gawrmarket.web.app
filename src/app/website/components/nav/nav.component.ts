import { Component, OnInit } from '@angular/core';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgModel, FormControl, Validators } from '@angular/forms';
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
  searchContent = new FormControl('', [Validators.required]);
  username!: string;
  faSearch = faSearch;
  faCartShopping = faCartShopping;
  faUser = faUser
  hideBtns!: boolean;
  hideLogo!: boolean;
  routeSuscription!: Subscription;

  constructor(private dataService: DataService, private cookie: CookieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.username = this.cookie.get('username');
    this.hideBtns = false;
    this.hideLogo = false;
  }

  ngOnInit(): void {}

  search() {
    if(this.searchContent.valid) {
      this.routeSuscription = this.activatedRoute.queryParams.subscribe(params => {
        let myQuery: Params = {};
        if(params['minPrice']) {
          myQuery['minPrice'] = params['minPrice'];
        }
        if(params['maxPrice']) {
          myQuery['maxPrice'] = params['maxPrice'];
        }
        myQuery['title'] = this.searchContent.value;
        if(this.searchContent.valid) {
          this.searchContent.setValue('');
          this.router.navigate(['timeline'], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
        }
        setTimeout(() => {
          this.hideBtns = false;
          this.hideLogo = false;
          this.routeSuscription.unsubscribe();
        }, 500);
      });
    }
  }

  focus() {
    const width = window.innerWidth;
    if(width < 660) {
      this.hideBtns = true;
      if(width < 455) {
        this.hideLogo = true;
      }
    }
  }

  unfocus() {
    if(this.searchContent.invalid) {
      this.hideBtns = false;
      this.hideLogo = false;
    }
  }

  navigating() {
    this.searchContent.setValue('');
    this.hideBtns = false;
    this.hideLogo = false;
  }
}
