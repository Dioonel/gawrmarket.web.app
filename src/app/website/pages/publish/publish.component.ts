import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { DataService } from '../../../services/data.service';

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
    if(this.title && this.description && this.price){
      this.dataService.publishNewPost({
        title: this.title,
        description: this.description,
        price: this.price,
        image: this.image || 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png'
      }).subscribe(data => {
        console.log(data);
      });
    }
  }
}
