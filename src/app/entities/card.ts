export class Card {
  id: string;
  desc: string;
  imgSrc: string;
  done: boolean;
  show: boolean;

  constructor(id: string, desc: string) {
    this.id = id;
    this.desc = desc;
    this.imgSrc = '../../assets/' + id + '.jpg';
    this.done = false;
    this.show = false;
  }
}
