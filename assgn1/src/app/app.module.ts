import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecyclechildComponent } from './components/lifecyclechild/lifecyclechild.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { MydataComponent } from './components/mydata/mydata.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LifecycleComponent,
    LifecyclechildComponent,
    PostsComponent,
    MydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
