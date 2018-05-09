
import { Component } from '@angular/core';

import { BeaShellOptions, MenuItem } from '@bea-shell/common/objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bea Shell';

  beaShellOptions: BeaShellOptions = {
    topbar: {
      menuItems: [
        { title: "Home" },
        {
          title: "Pricing",
          subitems: [
            { title: "Cheap" },
            { title: "Expensive" }
          ]
        },
        { title: "About" }
      ]
    },
    sidebar: {
      menuItems: [
        { title: "bla" },
        {
          title: "Pricing",
          subitems: [
            { title: "Cheap" },
            { title: "Expensive" }
          ]
        },
        { title: "About" }
      ]
    }
  }
}
