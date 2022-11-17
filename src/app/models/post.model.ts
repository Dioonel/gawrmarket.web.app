import { Product } from "./product.model";
import { SimpleUser } from "./user.model";
import { Comment } from "./comment.model";

export class Post {
  _id!: string;
  seller!: SimpleUser;
  title!: string;
  description!: string;
  product!: Product;
  comments!: Comment[] | [];
  created_at!: Date;
}

export class FilterPost {
  limit?: number;
  offset?: number;
  minPrice?: number;
  maxPrice?: number;
  title?: string;
}
