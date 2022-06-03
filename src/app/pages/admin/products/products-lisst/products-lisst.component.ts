import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../../shared/services/products.service';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { swalMessage } from 'src/app/shared/uiHelpers/swal/swal.module';
@Component({
  selector: 'app-products-lisst',
  templateUrl: './products-lisst.component.html',
  styleUrls: ['./products-lisst.component.scss'],
})
export class ProductsLisstComponent implements OnInit {
  products: any[] = [];
  product: any;

  statuses: any[] = [];
  constructor(
    private productService: ProductsService,
    private messageService: MessageService,
    private Title: Title
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
    this.Title.setTitle('Admin | Products - List')
  }

  deleteProduct(_id: string) {
    console.log(_id);
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.productService.remove(_id).subscribe((data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'Delete success',
          });
          this.products = this.products.filter(
            (item: any) => item._id !== item
          );
        });
      }
    });
  }
}
