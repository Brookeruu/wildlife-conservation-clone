import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainImgListComponent } from './main-img-list/main-img-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainImgListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
