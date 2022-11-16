import { SimpleUser } from "./user.model";

export class Comment {
  _id!: string;
  user!: SimpleUser;
  posting!: string;
  body!: string;
  created_at!: Date;
}
