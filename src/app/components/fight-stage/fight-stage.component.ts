import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fight-stage',
  templateUrl: './fight-stage.component.html',
  styleUrls: ['./fight-stage.component.css']
})
export class FightStageComponent implements OnInit {
  character1: string;
  char1Name: string;
  character2: string;
  char2Name: string;
  currentPlayer: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character1 = this.route.snapshot.queryParamMap.get('character1');
    this.character2 = this.route.snapshot.queryParamMap.get('character2');
    this.char1Name = this.setCharName(this.character1);
    this.char2Name = this.setCharName(this.character2);
    this.currentPlayer = "player1"
  }

  setCharName(character: string): string {
    let charName: string;
    if (character === 'jin') charName = 'Jin Kazama';
    if (character === 'kazuya') charName = 'Kazuya Mishima';
    if (character === 'paul') charName = 'Paul Phoenix';
    if (character === 'king') charName = 'King';
    return charName;
  }

}
