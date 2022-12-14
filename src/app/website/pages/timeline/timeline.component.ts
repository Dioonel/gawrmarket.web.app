import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Post, PostData } from '../../../models/post.model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  loading = true;
  data!: PostData;
  minPrice!: number;
  maxPrice!: number;
  isBack = false;
  isNext = false;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['minPrice']) {
        this.minPrice = params['minPrice'];
      }
      if(params['maxPrice']) {
        this.maxPrice = params['maxPrice'];
      }
      this.dataService.getTimeline(params).subscribe(res => {
        this.data = res;
        this.loading = false;
        this.paginateConfig(Math.floor(this.data.count / 18));
      }, err => {
        this.loading = false;
        this.router.navigate(['/not-found']);
      });
    });
  }

  filter(){
    this.activatedRoute.queryParams.subscribe(params => {
      let myQuery: Params = {};
      if(this.minPrice) {
        myQuery['minPrice'] = this.minPrice;
      }
      if(this.maxPrice) {
        myQuery['maxPrice'] = this.maxPrice;
      }
      if(params['title']) {
        myQuery['title'] = params['title'];
      }
      if(params['offset']) {
        myQuery['offset'] = 0;
      }
      this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
      window.location.reload();
    });
  }

  offset(n: number){
    this.activatedRoute.queryParams.subscribe(params => {
      let myQuery: Params = {};
      if(params['minPrice']) {
        myQuery['minPrice'] = params['minPrice'];
      }
      if(params['maxPrice']) {
        myQuery['maxPrice'] = params['maxPrice'];
      }
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
}
