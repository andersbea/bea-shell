import { HomeComponent } from "./home/home.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'configuration', component: ConfigurationComponent }
];