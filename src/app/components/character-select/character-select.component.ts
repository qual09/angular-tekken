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
    this.character1temp = 'player1';
    this.character2temp = 'player2';
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

  alert() {
    console.log(this.currentPlayer);
  }

}
