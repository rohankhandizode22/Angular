import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisComponent } from './components/regis/regis.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminauthGuard } from './guards/adminauth.guard';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisComponent,
    NavComponent,
    ProductsComponent,
    AddproductComponent,
    SearchPipe,
    EditComponent,
    DetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard,AdminauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
