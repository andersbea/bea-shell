
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Observable, OperatorFunction, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellOptions, MenuItem, TopbarOptions } from '@bea-shell/common/objects';


@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  options: Observable<BeaShellOptions>;
  expanded: Subject<boolean>;

  constructor(private beaShell: BeaShellService) { }

  ngOnInit() {
    this.options = this.beaShell.onOptionsChange.pipe(
      map((options: BeaShellOptions) => options)
    );
    this.expanded = this.beaShell.onSidebarToggle;
  }

  onMenuButtonClick(expand) {
    this.beaShell.onSidebarToggle.next(expand);
  }
}
