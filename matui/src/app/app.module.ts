import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './modules/mymaterial/mymaterial.module';
import { HomematerialComponent } from './components/homematerial/homematerial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomematerialComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
