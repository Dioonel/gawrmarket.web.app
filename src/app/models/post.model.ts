import { SimpleUser } from "./user.model";
import { Comment } from "./comment.model";

export class Post {
  _id!: string;
  seller!: SimpleUser;
  title!: string;
  description!: string;
  price!: number;
  image?: string;
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
