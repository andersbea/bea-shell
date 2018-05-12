
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  @Input() active: boolean = false;
  @Output() onStateChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }z
}
