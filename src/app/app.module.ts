import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
