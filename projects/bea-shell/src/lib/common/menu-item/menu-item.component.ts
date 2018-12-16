import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem, MenuIcon } from '@bea-shell/common/objects';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input('menuItem') menuItem: MenuItem;
  @Input('menuIcon') menuIcon: MenuIcon;
  @Input('barClass') barClass: string;

  placement: string;
  selected: boolean;

  constructor() { }

  ngOnInit() {
    if (this.menuItem.icon) {
      this.placement = this.menuItem.iconPlacement == 'right' ? 'right' : 'left';
    }
  }
}
