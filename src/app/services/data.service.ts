import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

import { Post } from './../models/post.model';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { CreateItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://mighty-reaches-09724.herokuapp.com';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let body = {username, password};
    return this.http.post<any>(`${this.url}/auth/login`, body)
    .pipe(map(data => {
      if(data?.token) {
        return data.token;
      } else {
        return null;
      }
    }));
  }

  getTimeline() {
    return this.http.get<Post[]>(`${this.url}/postings`);
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
    return this.http.get<Cart>(`${this.url}/my-profile/cart`);
  }

  addToMyCart(item: CreateItem) {
    return this.http.post<Cart>(`${this.url}/my-profile/cart`, item);
  }
}
