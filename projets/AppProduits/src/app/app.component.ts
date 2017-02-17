import {Component, ViewEncapsulation} from '@angular/core';
import {Licorne, Power} from "./app.model";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powers: Power[]

  licornes: Licorne[]

  selectedLicorne: Licorne

  constructor(private dataService: DataService) {
    this.powers = dataService.powers()
    this.licornes = dataService.licornes()
  }

  onSelectedLicorne(licorne) {
    this.selectedLicorne = licorne
  }

  addLicorne() {
    let licorne = new Licorne(-1, 'Name', null)

    this.licornes.push(licorne)
    this.selectedLicorne = licorne
  }
}
