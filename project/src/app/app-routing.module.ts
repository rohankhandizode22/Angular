import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import {LoginComponent} from './components/login/login.component'
import { ProductsComponent } from './components/products/products.component';
import { RegisComponent } from './components/regis/regis.component';
import { AdminauthGuard } from './guards/adminauth.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:RegisComponent},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'addproduct',component:AddproductComponent,canActivate:[AuthGuard,AdminauthGuard]},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:DetailsComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
