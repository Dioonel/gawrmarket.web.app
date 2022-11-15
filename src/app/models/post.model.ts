import { Product } from "./product.model";
import { SimpleUser } from "./user.model";
import { Comment } from "./comment.model";

export class Post {
  _id!: string;
  seller!: string | SimpleUser;
  title!: string;
  description!: string;
  product!: string | Product;
  image!: string;
  comments!: Array<Comment> | [];
  created_at!: Date;
}
