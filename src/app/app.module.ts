import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';

import { AppComponent } from './app.component';
import { MusicListComponent } from './musics/music-list.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavigationBar } from './nav_bar/nav_bar.compoment';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    StarComponent,
    ReplacePipe,
    NavigationBar,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'musics', pathMatch: 'full'
      },
      {
        path:'musics', component: MusicListComponent  
      },
      {
        path:'**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
