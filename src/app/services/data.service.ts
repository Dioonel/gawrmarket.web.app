import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

import { Post, PostData, FilterPost } from './../models/post.model';
import { User, UserData, FilterUser } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { CreateItem } from '../models/item.model';
import { Comment } from '../models/comment.model';
import { isEmpty } from './../../common/fns';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://mighty-reaches-09724.herokuapp.com';
  //url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let body = {username, password};
    return this.http.post<any>(`${this.url}/auth/login`, body)
    .pipe(map(data => {
      if(data?.token) {
        return data;
      } else {
        return null;
      }
    }));
  }

  getTimeline(filter: FilterPost) {
    let params = new HttpParams();

    params = params.append('limit', '18');

    if(filter.offset) {
      params = params.append('offset', filter.offset.toString());
    }
    if(filter.minPrice) {
      params = params.append('minPrice', filter.minPrice);
    }
    if(filter.maxPrice) {
      params = params.append('maxPrice', filter.maxPrice);
    }
    if(filter.title) {
      params = params.append('title', filter.title);
    }

    return this.http.get<PostData>(`${this.url}/postings`, {params});
  }

  getAllUsers(filter: FilterUser) {
    let params = new HttpParams();

    params = params.append('limit', '18');

    if(filter.offset) {
      params = params.append('offset', filter.offset.toString());
    }
    if(filter.username) {
      params = params.append('username', filter.username);
    }

    return this.http.get<UserData>(`${this.url}/users`, {params});
  }

  getOnePost(id: string) {
    return this.http.get<Post>(`${this.url}/postings/${id}`);
  }

  getMyProfile() {
    return this.http.get<User>(`${this.url}/my-profile`);
  }

  getOneUser(id: string) {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  getMyCart() {
    return this.http.get<Cart | any>(`${this.url}/my-profile/cart`);
  }

  addToMyCart(item: CreateItem) {
    return this.http.post<Cart | any>(`${this.url}/my-profile/cart`, item);
  }

  popItem(postId: string){
    return this.http.delete<Cart>(`${this.url}/my-profile/cart/${postId}`);
  }

  emptyCart(){
    return this.http.delete<Cart>(`${this.url}/my-profile/cart/empty`);
  }

  publishNewPost(post: any) {
    return this.http.post<Post | any>(`${this.url}/postings`, post);
  }

  createUser(user: any) {
    return this.http.post<User>(`${this.url}/users`, user);
  }

  deletePost(id: string) {
    return this.http.delete<boolean>(`${this.url}/postings/${id}`);
  }

  createComment(postId: string, comment: Object) {
    return this.http.post<Comment | any>(`${this.url}/postings/${postId}`, comment);
  }

  deleteComment(postId: string, commentId: string) {
    return this.http.delete<boolean>(`${this.url}/postings/${postId}/${commentId}`);
  }

  updateMyProfile(changes: any){
    return this.http.put<User>(`${this.url}/my-profile`, changes);
  }

  deleteMyProfile(){
    return this.http.delete<any>(`${this.url}/my-profile/delete`);
  }
}
