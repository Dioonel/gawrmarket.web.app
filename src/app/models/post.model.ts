import { Product } from "./product.model";
import { SimpleUser } from "./user.model";
import { Comment } from "./comment.model";

export class Post {
  _id!: string;
  seller!: SimpleUser;
  title!: string;
  description!: string;
  product!: Product;
  image!: string;
  comments!: Comment[] | [];
  created_at!: Date;
}
