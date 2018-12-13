import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { BeaShellModule } from '@bea-shell/bea-shell.module'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent
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
