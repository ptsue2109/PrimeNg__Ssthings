import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  itemsMenuBar: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.itemsMenuBar = [
    
   
    ];
  }
}
