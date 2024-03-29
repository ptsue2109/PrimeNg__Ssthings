import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './shared/uiHelpers/PrimeNg/PrimeNg.module';
import { MdbModule } from './shared/uiHelpers/mdb/Mdb.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/admin/users/users.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { WebLayoutComponent } from './components/layouts/web-layout/web-layout.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './components/layouts/admin-layout/admin-header/admin-header.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersAddComponent } from './pages/admin/users/users-add/users-add.component';
import { UsersEditComponent } from './pages/admin/users/users-edit/users-edit.component';
import { MessageService } from 'primeng/api';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductsAddComponent } from './pages/admin/products/products-add/products-add.component';
import { ProductsEditComponent } from './pages/admin/products/products-edit/products-edit.component';
import { ProductsLisstComponent } from './pages/admin/products/products-lisst/products-lisst.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './pages/website/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { WebHeaderComponent } from './components/layouts/web-layout/web-header/web-header.component';
import { WebFooterComponent } from './components/layouts/web-layout/web-footer/web-footer.component';
import { MaterialModule } from './shared/uiHelpers/meterial/meterial.module';
import { SlidersComponent } from './components/sliders/sliders.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { CardProductSlideComponent } from './components/card-product-slide/card-product-slide.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { WebProductListComponent } from './pages/website/products/web-product-list/web-product-list.component';
import { WebProductDetailComponent } from './pages/website/products/web-product-detail/web-product-detail.component';
import { DetailCardProductComponent } from './components/detail-card-product/detail-card-product.component';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersListComponent,
    WebLayoutComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    DashboardComponent,
    UsersAddComponent,
    UsersEditComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsLisstComponent,
    ErrorPageComponent,
    HomeComponent,
    WebHeaderComponent,
    WebFooterComponent,
    SlidersComponent,
    MenuCategoryComponent,
    CardProductSlideComponent,
    BrandsListComponent,
    WebProductListComponent,
    WebProductDetailComponent,
    DetailCardProductComponent,
    CurrencyPipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    MdbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    MaterialModule

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage())
  ],
  providers: [
    PrimeNgModule,
    MessageService,
     
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
