import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { MusicModule } from './musics/music.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    MusicModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'musics', pathMatch: 'full'  
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
