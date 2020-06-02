import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterSelectComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'character-select', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'character-select', component: CharacterSelectComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
