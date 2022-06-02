import { Component, Input, OnInit } from '@angular/core';
import { SlidersService } from 'src/app/services/sliders.service';
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  @Input () sliders:any
  constructor(private SlidersService:SlidersService) { 
  }
  ngOnInit(): void {

  }

}
