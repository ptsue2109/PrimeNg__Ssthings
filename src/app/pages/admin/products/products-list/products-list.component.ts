import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../services/products.service';
import { Title } from '@angular/platform-browser';
import { swal, swalMessage } from '../../../../shared/swal/swal.module';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any;
  constructor(private Title: Title,
    private ProductsService: ProductsService,) { }

  ngOnInit(): void {
    this.Title.setTitle('Products - List');
    this.getAll();
  }
  getAll() {
    this.ProductsService.getAll().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  remove(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.ProductsService.remove(_id).subscribe((data) => {
          swal('delete ', 'You add skill successfully !', 'success');
          this.products = this.products.filter((item: any) => item._id !== item);
        })
      }
    });
  }

}
