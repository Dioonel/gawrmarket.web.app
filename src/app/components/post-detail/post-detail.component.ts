import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

import { DataService } from './../../services/data.service';
import { Post } from './../../../app/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  quantity: number = 1;

  ngOnInit() {
    this.route.params.subscribe(id => {
      this.dataService.getOnePost(id['id']).subscribe(data => {
        console.log(data);
        this.post = data;
      });
    })
  }

  addToCart() {
    if(this.post.product){
      this.dataService.addToMyCart({ product: this.post.product._id, quantity: this.quantity }).subscribe(data => {
        console.log(data);
      });
    }
  }
}
