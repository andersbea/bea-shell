
import { Component, OnInit } from '@angular/core';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellOptions, MenuItem, SidebarOptions } from '@bea-shell/common/objects';

import { Subject, Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  options: Observable<SidebarOptions>;
  expanded: Subject<boolean>;

  constructor(private beaShell: BeaShellService) { }

  ngOnInit() {
    this.options = this.beaShell.onOptionsChange.pipe(
      map((options: BeaShellOptions) => options.sidebar)
    );
    this.expanded = this.beaShell.onSidebarToggle;
  }
}
