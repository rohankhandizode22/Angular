import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { MumbaiComponent } from './components/contact/mumbai/mumbai.component';
import { NoidaComponent } from './components/contact/noida/noida.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { MychildComponent } from './components/mychild/mychild.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    NavComponent,
    NotfoundComponent,
    DelhiComponent,
    MumbaiComponent,
    NoidaComponent,
    TemplatedrivenComponent,
    MychildComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
