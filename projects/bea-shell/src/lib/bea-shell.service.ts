
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { BeaShellOptions, MenuItem } from '@bea-shell/common/objects';

@Injectable({
  providedIn: 'root',
})
export class BeaShellService {

  public onMenuItemClick: Subject<MenuItem> = new BehaviorSubject<MenuItem>(null);
  public onMenuItemDoubleClick: Subject<MenuItem> = new BehaviorSubject<MenuItem>(null);

  public onMenuButtonClick: Subject<boolean> = new BehaviorSubject<boolean>(false);

  public onSidebarToggle: Subject<boolean> = new BehaviorSubject<boolean>(false);

  public onOptionsChange: Subject<BeaShellOptions> = new BehaviorSubject<BeaShellOptions>(null);

  constructor() {
  }

  setOptions(options: BeaShellOptions) {
    this.onOptionsChange.next(options);
  }

  expandSidebar() {
    this.onSidebarToggle.next(true);
  }
  retractSidebar() {
    this.onSidebarToggle.next(false);
  }
}
