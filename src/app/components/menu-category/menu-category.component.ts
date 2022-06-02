import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {
@Input () categories:any
  constructor() { }

  ngOnInit(): void {
  }

}
