export class Product {
  _id!: string;
  product!: string;
  price!: number;
  image!: string;
}

export class Item {
  _id?: string;
  product!: Product;
  quantity!: number;
  subtotal?: number;
}

export class CreateItem {
  product!: string;
  quantity!: number;
}
