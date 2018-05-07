import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
