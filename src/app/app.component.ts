import { Component } from '@angular/core';
import { MainImgComponent } from './models/mainImg.model';
import { GetInvolvedComponent } from './models/get-involved.model';

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

  selectedMainImg: null;

  editMainImgInfo(clickedMainImg){
  this.selectedMainImg = clickedMainImg;
  }

  finishedEditingApp() {
    this.selectedMainImg = null;
  }

  addMainImg(newMainImg: MainImgComponent) {
    this.masterMainImgScrollList.push(newMainImg);
  }

  // -----------

  masterGetInvolvedList: GetInvolvedComponent[] = [
    new GetInvolvedComponent('INDIVIDUAL DONORS', "Aenean ante magna, dapibus a lacinia eu, interdum eu nisi. Donec non velit id nulla pretium malesuada. Vivamus cursus mollis felis, nec dignissim ipsum molestie id."),
    new GetInvolvedComponent('MAJOR DONORS', "Donec convallis est non felis porta, at consectetur sem tempus. Knulla imperdiet ut. Etiam tempus efficitur tincidunt. Morbi efficitur arcu neque, vitae egestas lacus fermentum sit amet. Phasellus ullamcorper dui neque, et tempor augue finibus sed."),
    new GetInvolvedComponent('CORPORATE SPONSORS', "Morbi sed tellus nibh. Pellentesque egestas, risus sagittis tristique varius.  Aenean ante magna, dapibus a lacinia eu, interdum eu nisi. Phasellus placerat, nisl in egestas rhoncus, nisi massa volutpat est, et aliquam ex nunc ut urna.")
  ];
}
