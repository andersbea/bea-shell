import { NgModule } from '@angular/core';
import { BeaShellComponent } from './bea-shell.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuIconComponent } from './common/menu-icon/menu-icon.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [ 
    CommonModule
  ],
  declarations: [
    BeaShellComponent, 
    TopbarComponent, 
    SidebarComponent,
    MenuIconComponent, 
  ],
  exports: [
    BeaShellComponent
  ]
})
export class BeaShellModule { }
