import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BeaShellModule } from '@bea-shell/bea-shell.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BeaShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
