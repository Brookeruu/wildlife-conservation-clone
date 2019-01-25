import { Component } from '@angular/core';
import { MainImgComponent } from './models/mainImg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wildlife Conservation Clone';
  masterMainImgScrollList: MainImgComponent[] = [
    new MainImgComponent('Rhinos', "A brief description about rhinos", "link-to-rhino-page"),
    new MainImgComponent('Flying Squirrels', "A brief description about the missing flying squirrel", "link-to-flying-squirrel-page"),
    new MainImgComponent('Dwarf Buffalo', "A brief description about dwarf buffalo", "link-to-dwarf-buffalo-page")
  ];

}
