import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { DataService } from './../../../app/services/data.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  title!: string;
  description!: string;
  price!: number;
  image!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  publish(){
    if(this.title && this.description && this.price && this.image){
      this.dataService.publishNewPost({
        product: {
          product: this.title,
          price: this.price,
          image: this.image
        },
        title: this.title,
        description: this.description
      }).subscribe(data => {
        console.log(data);
      });
    }
  }
}
