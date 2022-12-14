import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { faTrashCan, faCog, faPencil } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../../services/data.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  loading = true;
  loadingCart = false;
  loadingComment = false;
  post!: Post;
  comment = '';
  quantity: number = 1;
  quantityError = false;
  userId = '';
  loginErrorCart = false;
  loginErrorComment = false;
  addedToCartSuccess = false;
  faTrashCan = faTrashCan;
  faCog = faCog;
  faPencil = faPencil;

  constructor(private route: ActivatedRoute, private dataService: DataService, private cookie: CookieService) {
    this.userId = this.cookie.get('user_id');
  }


  ngOnInit() {
    this.route.params.subscribe(id => {
      this.dataService.getOnePost(id['id']).subscribe(data => {
        this.post = data;
        this.loading = false;
      });
    })
  }

  addToCart() {
    if(this.post._id){
      if(this.quantity > 0){
        this.addedToCartSuccess = false;
        this.loadingCart = true;
        this.dataService.addToMyCart({ posting: this.post._id, quantity: this.quantity }).subscribe(data => {
          if(data?.message){
            this.loginErrorCart = true;
            this.loadingCart = false;
          } else {
            this.addedToCartSuccess = true;
            this.loadingCart = false;
          }
        });
      } else {
        this.quantityError = true;
      }
    }
  }

  createComment() {
    if(this.comment.length > 0){
      this.loadingComment = true;
      this.dataService.createComment(this.post._id, { body: this.comment }).subscribe(data => {
        if(data?.message){
          this.loginErrorComment = true;
          this.loadingComment = false;
        } else {
          this.comment = '';
          this.ngOnInit();
          this.loadingComment = false;
        }
      });
    }
  }

  deleteComment(commentId: string) {
    if(window.confirm('Are you sure you want to delete this comment?')){
      this.dataService.deleteComment(this.post._id, commentId).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

  deletePost(){
    if(window.confirm('Are you sure you want to delete this post?')){
      this.dataService.deletePost(this.post._id).subscribe(data => {
        window.location.href = '/';
      });
    }
  }
}
