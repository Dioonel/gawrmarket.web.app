import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { faShop, faSearch } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../../services/data.service';
import { UserData } from '../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  loading = true;
  data!: UserData;
  minPrice!: number;
  maxPrice!: number;
  isBack = false;
  isNext = false;
  searchUsername = '';
  faShop = faShop;
  faSearch = faSearch;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.dataService.getAllUsers(params).subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.loading = false;
        this.paginateConfig(Math.floor(this.data.count / 18));
      }, err => {
        this.loading = false;
        this.router.navigate(['/not-found']);
      });
    });
  }

  offset(n: number){
    this.activatedRoute.queryParams.subscribe(params => {
      let myQuery: Params = {};
      if(params['title']) {
        myQuery['title'] = params['title'];
      }
      myQuery['offset'] = n;
      this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
      window.location.reload();
    });
  }

  paginateConfig(n: number){
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['offset']) {
        if(params['offset'] > 0) {
          this.isBack = true;
        }
        if(params['offset'] < n) {
          this.isNext = true;
        }
      } else {
        if(n > 0) {
          this.isNext = true;
        }
      }
    });
  }

  back(){
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['offset']) {
        this.offset(params['offset'] - 1);
      }
    });
  }

  next(){
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['offset']) {
        this.offset(Number(params['offset']) + 1);
      } else {
        this.offset(1);
      }
    });
  }

  search(){
    if(this.searchUsername) {
      this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: {username: this.searchUsername}, queryParamsHandling: 'merge'})
      .then(() => {
        window.location.reload();
      })
    }
  }
}
