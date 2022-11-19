import { Post } from "./post.model";

export class Item {
  _id?: string;
  posting!: Post;
  quantity!: number;
  subtotal?: number;
}

export class CreateItem {
  posting!: string;
  quantity!: number;
}
