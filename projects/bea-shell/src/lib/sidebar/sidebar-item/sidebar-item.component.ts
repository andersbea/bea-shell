import { Component, OnInit, Input } from '@angular/core';

import { MenuItem, SidebarOptions } from '@bea-shell/common/objects';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input('options') options: Observable<SidebarOptions>;
  @Input('menuItem') menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  selectItem(){
    
  }
}
