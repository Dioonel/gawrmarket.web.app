import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cart!: Cart | any;
  faTrashCan = faTrashCan;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getMyCart().subscribe(data => {
      console.log(data);
      this.cart = data;
      this.loading = false;

      if(this.cart?.message === 'Please login first'){
        this.router.navigate(['/login']);
      }
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
