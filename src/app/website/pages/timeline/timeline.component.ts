import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Post } from '../../../models/post.model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  loading = true;
  data: Post[] = [];
  minPrice!: number;
  maxPrice!: number;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dataService.getTimeline(params).subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.loading = false;
      });
    })
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
      this.router.navigate(['/timeline'], {relativeTo: this.activatedRoute, queryParams: myQuery, queryParamsHandling: 'merge'});
    });
  }
}
