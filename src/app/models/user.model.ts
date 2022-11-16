import { Cart } from "./cart.model";
import { Post } from "./post.model";
import { Role } from "./role.model";

export class User {
  _id!: string;
  username!: string;
  role!: Role;
  age?: number;
  image!: string;
  postings!: Post[] | [];
  created_at!: Date;
}

export interface SimpleUser extends Pick<User, '_id'| 'username' | 'image'> {}

export interface MyProfile extends User {
  cart: string | Cart;
}
