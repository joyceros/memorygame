import {Injectable} from '@angular/core';
import {Highscore} from './highscore';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  highscores: Highscore[] = [
    new Highscore('jaap', 10),
    new Highscore('piet', 25)
  ];

  constructor() {
    this.sortList();
  }

  addHighscore(id, score) {
    this.highscores.push(new Highscore(id, score));
    this.sortList();

  }

  getHighscores() {
    return this.highscores;
  }

  sortList() {
    this.highscores.sort(this.compare);
  }

  compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (b.score < a.score) {
      return -1;
    }
    return 0;
  }
}
