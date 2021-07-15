import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';

import { AppComponent } from './app.component';
import { MusicListComponent } from './musics/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
