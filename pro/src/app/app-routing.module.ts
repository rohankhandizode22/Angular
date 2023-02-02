import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { MumbaiComponent } from './components/contact/mumbai/mumbai.component';
import { NoidaComponent } from './components/contact/noida/noida.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent,children:[
    {path:'',redirectTo:'noida',pathMatch:'full'},
    {path:'noida',component:NoidaComponent},
    {path:'delhi',component:DelhiComponent},
    {path:'mumbai',component:MumbaiComponent}
  ]},
  {path:'**',component:NotfoundComponent},
  {path:"template",component:TemplatedrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
