import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../../services/data.service';
import { Cart } from '../../../models/cart.model';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  loading = true;
  loadingRemove = false;
  cart!: Cart;
  faTrashCan = faTrashCan;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMyCart().subscribe(data => {
      console.log(data);
      this.cart = data;
      this.loading = false;
    });
  }

  popItem(postId: string) {
    if(postId){
      this.loadingRemove = true;
      this.dataService.popItem(postId).subscribe(data => {
        console.log(data);
        this.ngOnInit();
        this.loadingRemove = false;
      });
    }
  }
}
