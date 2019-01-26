import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GetInvolvedComponent } from '../models/get-involved.model';

@Component({
  selector: 'app-get-involved-list',
  templateUrl: './get-involved-list.component.html',
  styleUrls: ['./get-involved-list.component.css']
})
export class GetInvolvedListComponent {
  @Input() childGetInvolvedList: GetInvolvedComponent[];
  @Output() clickSender = new EventEmitter();


  // constructor() { }
  //
  // ngOnInit() {
  // }

}
