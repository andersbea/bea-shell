import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem, MenuIcon } from '@bea-shell/common/objects';
import { Router } from '@angular/router';

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

  constructor(private _router: Router) { }

  ngOnInit() {
    if (this.menuItem.icon) {
      this.placement = this.menuItem.iconPlacement == 'right' ? 'right' : 'left';
    }
  }

  click(menuItem: MenuItem){
    if(menuItem.href){
      window.open(menuItem.href, menuItem.newTab ? '_blank' : '_self');
    }
    if(menuItem.link){
      this._router.navigate([menuItem.link]);
    }
  }
}
