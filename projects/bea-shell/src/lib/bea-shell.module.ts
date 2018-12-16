
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellComponent } from './bea-shell.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuIconComponent } from './common/menu-icon/menu-icon.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { TopbarItemComponent } from './topbar/topbar-item/topbar-item.component';
import { ContentComponent } from './content/content.component';
import { MenuItemComponent } from './common/menu-item/menu-item.component';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule
  ],
  declarations: [
    BeaShellComponent, 
    TopbarComponent, 
    SidebarComponent,
    MenuIconComponent,
    SidebarItemComponent,
    TopbarItemComponent,
    ContentComponent,
    MenuItemComponent, 
  ],
  exports: [
    BeaShellComponent
  ],
  providers: [
    BeaShellService
  ],
})
export class BeaShellModule { }
