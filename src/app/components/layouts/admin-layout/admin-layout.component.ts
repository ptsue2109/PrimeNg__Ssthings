import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
     this.items = [
    {
      label: 'Users',
      icon: 'pi pi-pw pi-users',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/users/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/users'
        },
       
      ],
    },
    {
      label: 'Products',
      icon: 'pi pi-pw pi-table',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/products/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/products'
        },
       
      ],
    },
    {
      label: 'Brands',
      icon: 'pi pi-pw pi-tag',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/brands/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/brands'
        },
       
      ],
    },
    {
      label: 'Categories',
      icon: 'pi pi-pw pi-list',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/categories/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/categories'
        },
       
      ],
    },
    {
      label: 'Sliders',
      icon: 'pi pi-pw pi-images',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/sliders/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/sliders'
        },
       
      ],
    },
    {
      label: 'Orders',
      icon: 'pi pi-pw pi-shopping-bag',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          url: '/admin/orders/add'
        },
        {
          label: 'List',
          icon: 'pi pi-fw pi-align-justify',
          url: '/admin/orders'
        },
       
      ],
    },
    {
      label: 'Setting',
      icon: 'pi pi-pw pi-cog',
     
    },
   
    
  ];
  }
 

}
