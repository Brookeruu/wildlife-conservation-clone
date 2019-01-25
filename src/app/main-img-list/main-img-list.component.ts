import { Component, Input } from '@angular/core';
import { MainImgComponent } from '../models/mainImg.model';

@Component({
  selector: 'app-main-img-list',
  templateUrl: './main-img-list.component.html',
  styleUrls: ['./main-img-list.component.css']
})
export class MainImgListComponent {
  @Input() childMainImgList: MainImgListComponent[];

  // 
  // constructor() { }
  //
  // ngOnInit() {
  // }

}
