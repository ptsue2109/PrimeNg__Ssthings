import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { WebLayoutComponent } from './components/layouts/web-layout/web-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsAddComponent } from './pages/admin/products/products-add/products-add.component';
import { ProductsEditComponent } from './pages/admin/products/products-edit/products-edit.component';
import { ProductsLisstComponent } from './pages/admin/products/products-lisst/products-lisst.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { UsersAddComponent } from './pages/admin/users/users-add/users-add.component';
import { UsersEditComponent } from './pages/admin/users/users-edit/users-edit.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/website/home/home.component';
import { WebProductDetailComponent } from './pages/website/products/web-product-detail/web-product-detail.component';
import { WebProductListComponent } from './pages/website/products/web-product-list/web-product-list.component';
import { AuthGuard } from './shared/helpers/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent,
          },
          {
            path: 'add',
            component: UsersAddComponent,
          },
          {
            path: 'edit/:id',
            component: UsersEditComponent,
          },
        ],
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: ProductsLisstComponent,
          },
          {
            path: 'add',
            component: ProductsAddComponent,
          },
          {
            path: ':id',
            component: ProductsEditComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
        children:[
          {
            path: '',
            component : WebProductListComponent
          },
          {
            path: ':id',
            component: WebProductDetailComponent
          }
        ]
      }
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
