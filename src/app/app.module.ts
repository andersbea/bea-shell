import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { BeaShellModule } from '@bea-shell/bea-shell.module';
import { CheckboxComponent } from './controls/checkbox/checkbox.component'
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BeaShellModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
