import { Component, Output, EventEmitter } from '@angular/core';
import { MainImgComponent } from '../models/mainImg.model';

@Component({
  selector: 'app-add-main-img',
  templateUrl: './add-main-img.component.html',
  styleUrls: ['./add-main-img.component.css']
})
export class AddMainImgComponent {
  @Output() sendMainImg = new EventEmitter();

  submitForm(species: string, description: string, link: string) {
    let newMainImg: MainImgComponent = new MainImgComponent(species, description, link);
    this.sendMainImg.emit(newMainImg);
  }

  selectedHeader = null;

  newMainImgForm() {
    this.selectedHeader = true;
  }

  finishedAddNew() {
    this.selectedHeader = null;
  }

}
