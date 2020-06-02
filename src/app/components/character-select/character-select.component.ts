import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {
  character1: string;
  character1temp: string;
  char1Name: string;

  character2: string;
  character2temp: string;
  char2Name: string;

  currentPlayer: string;

  constructor() { }

  ngOnInit(): void {
    this.currentPlayer = 'player1';
  }

  select(character: string) {
    if (this.currentPlayer === "player1") {
      this.character1 = character;
      this.character1temp = character;
      this.char1Name = this.setCharName(character);
    } else {
      this.character2 = character;
      this.character2temp = character;
      this.char2Name = this.setCharName(character);
    }
  }

  preview(character: string) {
    if (this.currentPlayer === "player1") {
      this.character1temp = this.character1;
      this.character1 = character;
      this.char1Name = this.setCharName(character);
    } else {
      this.character2temp = this.character2;
      this.character2 = character;
      this.char2Name = this.setCharName(character);
    }
  }

  endPreview() {
    if (this.currentPlayer === "player1") {
      this.character1 = this.character1temp;
      this.char1Name = this.setCharName(this.character1);
    } else {
      this.character2 = this.character2temp;
      this.char2Name = this.setCharName(this.character2);
    }
  }

  setCharName(character: string): string {
    let charName: string;
    if (character === 'jin') charName = 'Jin Kazama';
    if (character === 'kazuya') charName = 'Kazuya Mishima';
    if (character === 'paul') charName = 'Paul Phoenix';
    if (character === 'king') charName = 'King';
    return charName;
  }

  fight(): void {
    // JIN
    if (this.character1.includes('jin') || this.character2.includes('jin')) {
      if (this.character1 === this.character2)
        window.open('https://www.youtube.com/watch?v=zU1tD6Wcy14');
      if (this.character1.includes('kazuya') || this.character2.includes('kazuya'))
        window.open('https://www.youtube.com/watch?v=57PUKrQ8tJo');
      if (this.character1.includes('paul') || this.character2.includes('paul'))
        window.open('https://www.youtube.com/watch?v=FkZozsJWRro');
      if (this.character1.includes('king') || this.character2.includes('king'))
        window.open('https://www.youtube.com/watch?v=c--eJnaftgU');
      return;
    }
    // KAZUYA
    if (this.character1.includes('kazuya') || this.character2.includes('kazuya')) {
      if (this.character1 === this.character2)
        window.open('https://www.youtube.com/watch?v=wF3GheceUrQ');
      if (this.character1.includes('paul') || this.character2.includes('paul'))
        window.open('https://youtu.be/0SNcLm-M-Oc?t=13');
      if (this.character1.includes('king') || this.character2.includes('king'))
        window.open('https://youtu.be/2GBql7wWT38');
      return;
    }
    // PAUL
    if (this.character1.includes('paul') || this.character2.includes('paul')) {
      if (this.character1 === this.character2)
        window.open('https://www.youtube.com/watch?v=uAT7rHydjqQ');
      if (this.character1.includes('king') || this.character2.includes('king'))
        window.open('https://www.youtube.com/watch?v=CmwFIR9r-o0');
      return;
    }
    // KING
    if (this.character1.includes('king') || this.character2.includes('king')) {
      if (this.character1 === this.character2)
        window.open('https://www.youtube.com/watch?v=3kECJiYvljs');
      return;
    }
    window.open('https://www.youtube.com/watch?v=kKLCwDg2JLA');
  }

}
