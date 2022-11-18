import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { DataService } from './../../services/data.service';
import { Cart } from './../../../app/models/cart.model';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  loading = true;
  cart!: Cart;
  faXmark = faXmark;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMyCart().subscribe(data => {
      console.log(data);
      this.cart = data;
      this.loading = false;
    });
  }

  popItem(productId: string) {
    if(productId){
      this.dataService.popItem(productId).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
  }
}
