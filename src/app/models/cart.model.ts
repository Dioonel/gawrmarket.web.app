import { Item } from "./product.model";
import { User } from "./user.model";

export class Cart {
  _id!: string;
  user!: string | User;
  items!: Array<Item>;
  total?: number;
}
