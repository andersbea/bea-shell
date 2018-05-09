
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellComponent } from './bea-shell.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuIconComponent } from './common/menu-icon/menu-icon.component';

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
  ],
  providers: [
    BeaShellService
  ],
})
export class BeaShellModule { }
