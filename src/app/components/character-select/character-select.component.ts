import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {
  char1: string;
  char1Name: string;
  char2: string;
  char2Name: string;
  currentPlayer: string;

  constructor() { }

  ngOnInit(): void {
    this.currentPlayer = "player1";
  }

  select(character: string) {

    if(this.currentPlayer === "player1"){
      this.char1 = character;
      if(character === 'jin') this.char1Name = 'Jin Kazama';
      if(character === 'kazuya') this.char1Name = 'Kazuya Mishima';
      if(character === 'paul') this.char1Name = 'Paul Phoenix';
      if(character === 'king') this.char1Name = 'King';
    } else {
      this.char2 = character;
      if(character === 'jin') this.char2Name = 'Jin Kazama';
      if(character === 'kazuya') this.char2Name = 'Kazuya Mishima';
      if(character === 'paul') this.char2Name = 'Paul Phoenix';
      if(character === 'king') this.char2Name = 'King';
    }

  }

  alert(){
    console.log(this.currentPlayer);
  }

}
