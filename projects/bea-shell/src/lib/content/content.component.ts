import { Component, OnInit } from '@angular/core';
import { BeaShellOptions } from '@bea-shell/common/objects';
import { BeaShellService } from '@bea-shell/bea-shell.service';

@Component({
  selector: 'content',
  template: '<ng-content></ng-content>'
})
export class ContentComponent implements OnInit {

  options: BeaShellOptions;
  withTopbar: boolean;

  constructor(private beaShell: BeaShellService) { }

  ngOnInit() {
    this.beaShell.onOptionsChange
      .subscribe((options: BeaShellOptions) => {
        this.options = options;
        this.withTopbar = !options.topbar.disabled;
      });
  }
}
