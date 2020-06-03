import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { FooterComponent } from './components/footer/footer.component';
import { FightStageComponent } from './components/fight-stage/fight-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterSelectComponent,
    FooterComponent,
    FightStageComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'character-select', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'character-select', component: CharacterSelectComponent },
      { path: 'fight-stage', component: FightStageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
