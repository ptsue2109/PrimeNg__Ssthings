import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './../../../../services/homeService.service';
@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.scss']
})
export class WebHeaderComponent implements OnInit {
  email: any;
  password: any;
  username: any;
  role:any
  avatar:any;
  categories : any
  brands : any
  constructor(private router: Router,private toastr: ToastrService,private HomeService: HomeService) { }

  ngOnInit(): void {
    let getUSerInfo: any = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (getUSerInfo) {
      this.email = getUSerInfo.email;
      this.username = getUSerInfo.username;
      this.password= getUSerInfo.password;
      this.role = getUSerInfo.role;
      this.avatar = getUSerInfo.image;
      console.log(getUSerInfo);
      
    }
    this.getAllData()
  }
getAllData() {
  this.HomeService.getAllData().subscribe({
    next: (data) =>{
      console.log(data);
      this.categories = data.categories;
      this.brands = data.brands
      console.log(this.categories);
      
      
    },
    error: (error) =>{
      console.log(error);
      
    }
  })
}
  logout(){
    localStorage.removeItem('userInfo') 
      this.toastr.info('Logout success');
      this.router.navigate(['/']);
  }
}
