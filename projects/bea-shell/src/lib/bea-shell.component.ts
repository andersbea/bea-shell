
import { Component, OnInit, Input } from '@angular/core';

import { BeaShellService } from '@bea-shell/bea-shell.service';
import { BeaShellOptions } from '@bea-shell/common/objects';

@Component({
  selector: 'bea-shell',
  templateUrl: './bea-shell.component.html',
  styleUrls: ['./bea-shell.component.scss']
})
export class BeaShellComponent implements OnInit {

  @Input('options') 
  set options(options: BeaShellOptions) {
    this.beaShell.onOptionsChange.next(options);
  }

  constructor(private beaShell: BeaShellService) { }

  ngOnInit() {
  }
}
