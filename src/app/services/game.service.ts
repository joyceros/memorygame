import {Injectable, ViewChild} from '@angular/core';
import {Card} from './card';
import {TimerComponent} from './timer/timer.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  numbersDone = [];
  playCards = 6;
  cardsLength = 10;
  rangeCards = [];
  mockedCards = [];
  cards = [];
  player = '';
  allCards: Card[] = [
    new Card('1', 'lettera'), new Card('2', 'lettera'), new Card('3', 'letterb'),
    new Card('4', 'letterb'), new Card('5', 'letterc'), new Card('6', 'letterc'),
    new Card('7', 'letterd'), new Card('8', 'letterd'), new Card('9', 'lettere'),
    new Card('10', 'lettere')];

  constructor() {
    this.selectCards();
  }

  selectCards() {
    let lastCard = Math.floor(Math.random() * this.cardsLength) + this.playCards;
    while (lastCard > this.cardsLength || lastCard % 2 === 1 || lastCard < this.playCards) {
      lastCard = Math.floor(Math.random() * (this.cardsLength)) + this.playCards;
    }
    const s = lastCard - this.playCards;
    this.getCards(s, lastCard);
  }

  getCards(s, l) {
    this.rangeCards = [];
    for (let i = 0; i < this.allCards.length; i++) {
      if (i >= s && i < l) {
        this.rangeCards.push(new Card(this.allCards[i].id, this.allCards[i].desc));
      }
    }
    this.shuffle(this.setUpCards(this.rangeCards));
  }

  setUpCards(data) {
    for (let i = 0; i < this.playCards; i++) {
      this.mockedCards.push(new Card(data[i].id, data[i].desc));
    }
    return this.mockedCards;
  }

  shuffle(array) {
    this.numbersDone = [];
    this.cards = [];
    for (let x = 0; x < this.playCards; x++) {
      let random = Math.floor(Math.random() * array.length);
      while (this.numbersDone.includes(random)) {
        random = Math.floor(Math.random() * array.length);
      }
      this.numbersDone.push(random);
      this.cards.push(array[random]);
    }
  }

  newCards() {
    this.cards = [];
    this.mockedCards = [];
    this.rangeCards = [];
    this.selectCards();
  }

  setPlayer(player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  getCardsList() {
    this.newCards();
    return this.cards;
  }
}
