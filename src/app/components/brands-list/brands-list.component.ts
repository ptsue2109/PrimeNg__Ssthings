import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {
@Input ()  brands:any
  constructor() { }

  ngOnInit(): void {
  }

}
