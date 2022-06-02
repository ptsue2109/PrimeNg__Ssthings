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
import { WebsiteComponent } from './pages/website/website.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './shared/PrimeNg/PrimeNg.module';
import { MdbModule } from './shared/mdb/Mdb.module';
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
import { ProductsListComponent } from './pages/admin/products/products-list/products-list.component';
import { ProductsAddComponent } from './pages/admin/products/products-add/products-add.component';
import { ProductsEditComponent } from './pages/admin/products/products-edit/products-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WebsiteComponent,
    UsersComponent,
    UsersListComponent,
    WebLayoutComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    DashboardComponent,
    UsersAddComponent,
    UsersEditComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
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
    SweetAlert2Module.forRoot()

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
    MessageService
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
