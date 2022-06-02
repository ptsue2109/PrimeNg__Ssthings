import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadImgService } from './../../../../services/upload-img.service';
import { Title } from '@angular/platform-browser';
import { CategoryService } from './../../../../services/category.service';
import { ProductsService } from './../../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  categories: any = [];
  dataPro: any = [];
  id: string;
  file: any = [];
  selected: string = '';
  OldImage: string | null | undefined;
  newImg: string | null | undefined;
  listImgDetail :any
  constructor(
    private ProductsService: ProductsService,
    private route: Router,
    private uploadFile: UploadImgService,
    private title: Title,
    private CategoryService: CategoryService,
    private ActivatedRouter: ActivatedRoute
  ) {
    this.id = '';
    this.title.setTitle('Products - Edit ');
   }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.ProductsService.getOneById(this.id).subscribe((data) => {
      this.dataPro = data;
      this.selected = data.categories;
      this.OldImage = data.image;
      this.listImgDetail = data.image_mutiple;
    });
  }
  getAllCate() {
    this.CategoryService.getAllCate().subscribe((data) =>{
      this.categories = data;
    })
  }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  AddForm: FormGroup = new FormGroup({
    name_product: new FormControl(),
    price: new FormControl(),
    stock: new FormControl(),
    discount: new FormControl(),
    category_id: new FormControl(),
    brand: new FormControl(),
    image: new FormControl(),
    desc: new FormControl(),
    short_desc: new FormControl(),
    priceAfterDiscount : new FormControl(),
    image_mutiple: new FormControl(),
    isFeatured: new FormControl(),
  });

  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
    this.newImg = localStorage.getItem('imgThum');
  }

  addNew() {
    // this.toastr.info('Loading...');
    setTimeout(() => {
      let userData: any = {
        name_product: this.AddForm.value.name_product,
        price: this.AddForm.value.price,
        stock: this.AddForm.value.stock,
        discount: this.AddForm.value.discount,
        short_desc: this.AddForm.value.short_desc,
        desc: this.AddForm.value.desc,
        priceAfterDiscount: this.AddForm.value.priceAfterDiscount,
        image: this.newImg ? this.newImg : this.OldImage,
        categories: this.selected,
      };
      console.log(userData);

      this.ProductsService.editProduct(userData, this.id).subscribe({
        next: (data: any) => {
          this.route.navigate(['/admin/products']);
          localStorage.removeItem('imgThum');
        },
        error: ({ error }) => {
          localStorage.removeItem('imgThum');
        },
      });
    }, 5000);
  }
}