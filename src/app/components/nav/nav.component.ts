import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchContent = '';
  faSearch = faSearch;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchContent.length > 0) {
      location.href = `/timeline?title=${this.searchContent}`;
    }
  }
}
