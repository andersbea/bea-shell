import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { MenuItem, MenuIcon } from '@bea-shell/common/objects';

@Component({
  selector: 'topbar-item',
  templateUrl: './topbar-item.component.html',
  styleUrls: ['./topbar-item.component.scss']
})
export class TopbarItemComponent implements OnInit {

  @Input("menuItem") menuItem: MenuItem;
  @Input("menuIcon") menuIcon: MenuIcon;

  constructor() { }

  ngOnInit() {
  }

  select(menuItem){
    console.log(menuItem)
  }
}
