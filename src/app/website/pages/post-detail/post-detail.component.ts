import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../../services/data.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  loading = true;
  post!: Post;
  comment = '';
  quantity: number = 1;
  quantityError = false;
  userId = '';
  loginErrorCart = false;
  loginErrorComment = false;
  addedToCartSuccess = false;
  faTrashCan = faTrashCan;

  constructor(private route: ActivatedRoute, private dataService: DataService, private cookie: CookieService) {
    this.userId = this.cookie.get('user_id');
    console.log(this.cookie.get('user_id'));
  }


  ngOnInit() {
    this.route.params.subscribe(id => {
      this.dataService.getOnePost(id['id']).subscribe(data => {
        console.log(data);
        this.post = data;
        this.loading = false;
      });
    })
  }

  addToCart() {
    if(this.post._id){
      if(this.quantity > 0){
        this.dataService.addToMyCart({ posting: this.post._id, quantity: this.quantity }).subscribe(data => {
          if(data?.message){
            this.loginErrorCart = true;
          } else {
            console.log(data);
            this.addedToCartSuccess = true;
          }
        });
      } else {
        this.quantityError = true;
        console.log('Quantity must be greater than 0');
      }
    }
  }

  createComment() {
    if(this.comment.length > 0){
      this.dataService.createComment(this.post._id, { body: this.comment }).subscribe(data => {
        if(data?.message){
          this.loginErrorComment = true;
        } else {
          console.log(data);
          this.comment = '';
          this.ngOnInit();
        }
      });
    }
  }

  deleteComment(commentId: string) {
    if(window.confirm('Are you sure you want to delete this comment?')){
      this.dataService.deleteComment(this.post._id, commentId).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
  }
}
