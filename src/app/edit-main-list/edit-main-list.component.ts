import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainImgComponent } from '../models/mainImg.model';

@Component({
  selector: 'app-edit-main-list',
  templateUrl: './edit-main-list.component.html',
  styleUrls: ['./edit-main-list.component.css']
})
export class EditMainListComponent{
  @Input() childSelectedMainImg: MainImgComponent;
  @Output() clickedDone = new EventEmitter();

};
  // finishedEditing() {
  //   this.clickedDone.emit();
  // };
