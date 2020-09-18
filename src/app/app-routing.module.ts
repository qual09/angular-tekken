import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { FightStageComponent } from './components/fight-stage/fight-stage.component';

const routes: Routes = [
  { path: '', redirectTo: 'character-select', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'character-select', component: CharacterSelectComponent },
  { path: 'fight-stage', component: FightStageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
