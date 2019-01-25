import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainImgComponent } from '../models/mainImg.model';

@Component({
  selector: 'app-main-img-list',
  templateUrl: './main-img-list.component.html',
  styleUrls: ['./main-img-list.component.css']
})
export class MainImgListComponent {
  @Input() childMainImgList: MainImgComponent[];
  @Output() clickSender = new EventEmitter();


  editMainImgClicked(mainImgToEdit: MainImgComponent){
    this.clickSender.emit(mainImgToEdit);
  }


  //
  // constructor() { }
  //
  // ngOnInit() {
  // }

}
