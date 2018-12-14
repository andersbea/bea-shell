
import { Component, ViewChild } from '@angular/core';

import { BeaShellOptions, MenuItem } from '@bea-shell/common/objects';
import { BeaShellComponent } from '@bea-shell/bea-shell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BeaShellComponent)
  private beaShellComponent: BeaShellComponent;

  beaShellOptions: BeaShellOptions = {
    topbar: {
      left: [
        { 
          title: "Bea Shell",
          link: "home"
        }
      ],
      right: [
        { 
          title: "Getting started",
          link: "home",
          subitems: [
            { title: "Installing" },
            { 
              title: "Configuration",
              link: "configuration" 
            }
          ] 
        },
        { 
          title: "About",
          icon: "fas fa-award",
        },
        {
          title: "Topbar item with submenu",
          link: "https://github.com/andersbea/bea-shell/projects/1",
          subitems: [
            { title: "Topbar submenu item 1" },
            { title: "Topbar submenu item 2" }
          ],
        }
      ]
    },
    sidebar: {
      header: [
        { title: "Header" },
        { title: "Item" },
      ],
      menuItems: [
        { title: "Item" },
        { 
          title: "Submenu",
          subitems: [
            { title: "Item 1" },
            { 
              title: "Item 2",
              subitems: [ { title: "Second level"} ] 
            }
          ]
        },
        {
          title: "Item with icon",
          icon: "fas fa-award"
        }
      ],
      footer: [
        { title: "Footer" }
      ],
      placement: "left",
      menuIcon: {
        html: "<i class='fas fa-award'></i>"
      }
    }
  }

  toggleTopbar(){
    this.beaShellOptions.topbar.disabled = !this.beaShellOptions.topbar.disabled;
  }
  
  toggleSidebar(){
    this.beaShellOptions.sidebar.disabled = !this.beaShellOptions.sidebar.disabled;
  }
}
