import { Component } from '@angular/core';

interface GameState {
  crowPosition: number;
  fruits: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: GameState = {
    crowPosition: 4,
    fruits: [4, 4, 4, 4]
  }

  chooseTree = false;

  get canRollDice() {
    return !this.chooseTree;
  }

  winner = null;

  onDieRolled(dieValue) {
    if (dieValue < this.state.fruits.length) {
      if (this.state.fruits[dieValue] > 0) {
        this.state.fruits[dieValue]--;
        this.checkPlayerWins();
      }
    }
    else if (dieValue == this.state.fruits.length) {
      this.chooseTree = true;
    }
    else {
      this.state.crowPosition--;

      if (this.state.crowPosition == 0) {
        this.winner = "Le Crow";
      }
    }
  }

  onChooseTree(treeIndex) {
    this.state.fruits[treeIndex]--;
    this.chooseTree = false;
    this.checkPlayerWins();
  }

  checkPlayerWins() {
    if (this.state.fruits.every(nb => nb == 0))
      this.winner = 'VOUS';
  }
}
