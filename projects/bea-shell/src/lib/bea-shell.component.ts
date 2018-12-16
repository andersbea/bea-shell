
import { Component, OnInit, Input } from '@angular/core';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellOptions } from '@bea-shell/common/objects';

@Component({
  selector: 'bea-shell',
  templateUrl: './bea-shell.component.html',
  styleUrls: ['./bea-shell.component.scss']
})
export class BeaShellComponent implements OnInit {

  private _options: BeaShellOptions;
  withTopbar: boolean;
  withSidebar: boolean;

  beaShell: BeaShellService;

  @Input('options')
  set options(options: BeaShellOptions) {
    this._options = options;
  }
  get options() {
    return this._options;
  }

  constructor(private _beaShell: BeaShellService) {
    this.beaShell = _beaShell;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.withTopbar = !this.options.topbar.disabled;
    this.withSidebar = !this.options.sidebar.disabled;
    this.beaShell.setOptions(this.options);
  }
}
