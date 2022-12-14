import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  salesMsg = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  sales() {
    this.salesMsg = true;
  }
}
