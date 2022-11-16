import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';
import { Post } from './../../../app/models/post.model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  data: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTimeline().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

}
