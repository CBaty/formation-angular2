import {Component, ViewEncapsulation} from '@angular/core';
import {Licorne, Power} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powers: Power[] = [
    new Power(1, "Flies"),
    new Power(2, "Simws"),
    new Power(3, "Walks")
  ]

  licornes: Licorne[] = [
    new Licorne(1, "Toto", this.powers[0]),
    new Licorne(2, "Titi", this.powers[0]),
    new Licorne(3, "Tutu", this.powers[0]),
  ]

  selectedLicorne: Licorne

  onSelectedLicorne(licorne) {
    this.selectedLicorne = licorne
  }

  addLicorne() {
    let licorne = new Licorne(-1, 'Name', null)

    this.licornes.push(licorne)
    this.selectedLicorne = licorne
  }
}
