
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
      logo: {
        title: "Bea Shell"
      },
      menuItems: [
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        { title: "Topbar item" },
        {
          title: "Topbar item with submenu",
          subitems: [
            { title: "Topbar submenu item 1" },
            { title: "Topbar submenu item 2" }
          ]
        },
        { title: "Topbar item with icon" }
      ]
    },
    sidebar: {
      header: {
        title: "Header"
      },
      menuItems: [
        { title: "Sidebar item" },
        { 
          title: "Sidebar item with submenu",
          subitems: [
            { title: "Sidebar submenu item 1" },
            { title: "Sidebar submenu item 2" }
          ]
        }
      ],
      footer: {
        title: "Footer"
      }
    }
  }
}
