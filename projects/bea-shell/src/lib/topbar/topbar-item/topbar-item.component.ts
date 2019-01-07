import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { MenuItem } from '@bea-shell/common/objects';

@Component({
  selector: 'topbar-item',
  templateUrl: './topbar-item.component.html',
  styleUrls: ['./topbar-item.component.scss']
})
export class TopbarItemComponent implements OnInit {

  @Input("menuItem") menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  select(menuItem){
    console.log(menuItem)
  }
}
