import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

  oddColor = 'pink'

  list: string[] = []

  ajouterElement(valeur: string, input: HTMLInputElement) {
    this.list.push(valeur)
    input.value = "super"
  }
}
