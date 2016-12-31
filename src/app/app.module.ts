import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MissionsModule } from './missions';
import { EngineModule } from './engine';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EngineModule,
    MissionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
