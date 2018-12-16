import { Component, OnInit, Input } from '@angular/core';

import { MenuItem, SidebarOptions } from '@bea-shell/common/objects';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input('options') options: SidebarOptions;
  @Input('menuItem') menuItem: MenuItem;

  selected: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

  select(){
    this.selected = !this.selected;
  }
}
