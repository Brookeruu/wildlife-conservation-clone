import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';


import { AppComponent } from './app.component';
import { MainImgListComponent } from './main-img-list/main-img-list.component';
import { EditMainListComponent } from './edit-main-list/edit-main-list.component';
import { AddMainImgComponent } from './add-main-img/add-main-img.component';
import { GetInvolvedListComponent } from './get-involved-list/get-involved-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainImgListComponent,
    EditMainListComponent,
    AddMainImgComponent,
    GetInvolvedListComponent
  ],
  imports: [
    SlideshowModule,
    BrowserModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
