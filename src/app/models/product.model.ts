export class Product {
  _id!: string;
  product!: string;
  price!: number;
}

export class Item {
  _id?: string;
  product!: string | Product;
  quantity!: number;
  subtotal?: number;
}
