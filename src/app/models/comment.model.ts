import { SimpleUser } from "./user.model";

export class Comment {
  _id!: string;
  user!: string | SimpleUser;
  posting!: string;
  body!: string;
  created_at!: Date;
}
