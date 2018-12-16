
import { Component, OnInit } from '@angular/core';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellOptions, MenuItem, SidebarOptions } from '@bea-shell/common/objects';

import { Subject } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  options: SidebarOptions;
  expanded: Subject<boolean>;
  withTopbar: boolean;

  selected: MenuItem;

  constructor(private beaShell: BeaShellService) { }

  ngOnInit() {
    this.beaShell.onOptionsChange
      .subscribe((options: BeaShellOptions) => {
        this.options = options.sidebar;
        this.withTopbar = !options.topbar.disabled;
      });
    this.expanded = this.beaShell.onSidebarToggle;
  }

  onMenuButtonClick(expand) {
    this.beaShell.onSidebarToggle.next(expand);
  }

  close() {
    this.beaShell.onSidebarToggle.next(false);
  }
}
