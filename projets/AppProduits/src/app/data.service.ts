import {Power, Licorne} from "./app.model";

const POWERS: Power[] = [
  new Power(1, "Flies"),
  new Power(2, "Simws"),
  new Power(3, "Walks")
]

const LICORNES: Licorne[] = [
  new Licorne(1, "Toto", POWERS[0]),
  new Licorne(2, "Titi", POWERS[0]),
  new Licorne(3, "Tutu", POWERS[0]),
]

export class DataService {
  powers() {
    return POWERS
  }

  licornes() {
    return LICORNES
  }
}
