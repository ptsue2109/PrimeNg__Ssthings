import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadImgService } from './../../../../services/upload-img.service';
import { Title } from '@angular/platform-browser';
import { CategoryService } from './../../../../services/category.service';
import { ProductsService } from './../../../../services/products.service';
import { BrandsService } from './../../../../services/brands.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {
  categories: any;
  brands: any;
  file: any = [];
  files: any = [];
  isFeaturedChecked: boolean = false;
  constructor(
    private ProductsService: ProductsService,
    private route: Router,
    private uploadFile: UploadImgService,
    private title: Title,
    private CategoryService: CategoryService,
    private BrandsService: BrandsService,
    private messageService: MessageService,
  ) { this.title.setTitle('Products - Add '); }

  ngOnInit(): void {
    this.getAllCate();
    this.getAllBrands();
  }
  getAllCate() {
    this.CategoryService.getAllCate().subscribe((data) => {
      this.categories = data;
    })
  }
  getAllBrands() {
    this.BrandsService.getAll().subscribe((data) => {
      this.brands = data;
    })
  }
  checkCheckBoxvalue(event: any) {
    this.isFeaturedChecked = event.target.checked
  }
  AddForm: FormGroup = new FormGroup({
    name_product: new FormControl(),
    price: new FormControl(),
    stock: new FormControl(),
    discount: new FormControl(),
    categoryId: new FormControl(),
    brandId: new FormControl(),
    image: new FormControl(),
    desc: new FormControl(),
    short_desc: new FormControl(),
    priceAfterDiscount: new FormControl(),
    image_mutiple: new FormControl(),
    isFeatured: new FormControl(),
  });
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  saveDetailImg(event: any) {
    this.files = event.target.files;
    this.uploadFile.uploadListImg(this.files);
  }
  addNew() {
    let urlDetail = JSON.parse(localStorage.getItem('imgList') || "{}");
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' })
    setTimeout(() => {
      let uploadData: any = {
        name_product: this.AddForm.value.name_product,
        price: this.AddForm.value.price,
        stock: this.AddForm.value.stock,
        discount: this.AddForm.value.discount,
        short_desc: this.AddForm.value.short_desc,
        desc: this.AddForm.value.desc,
        priceAfterDiscount: this.AddForm.value.priceAfterDiscount,
        image: localStorage.getItem('imgThum'),
        categoryId: this.AddForm.value.categoryId,
        image_mutiple: urlDetail,
        brandId: this.AddForm.value.brandId,
        isFeatured: this.isFeaturedChecked
      };
      console.log('uploadData', uploadData);

      this.ProductsService.addNew(uploadData).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/products']);
            localStorage.removeItem('imgThum');
          }, 200);
        },
        error: ({ error }) => {
          localStorage.removeItem('imgThum');
          localStorage.removeItem('imgList');
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: `${error}` })
        },
      });
    }, 8000);


  }

}
