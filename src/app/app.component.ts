
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
          link: "home",
          image: "assets/bea-shell-icon.png"
        }
      ],
      right: [
        { 
          title: "Getting started",
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
          icon: "fab fa-github",
          href: "https://github.com/andersbea/bea-shell/projects/1",
          newTab: true,
          class: "github-icon"
        }
      ]
    },
    sidebar: {
      header: [
        { title: "Header" },
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

  toggleTopbarDisabled(){
    this.beaShellOptions.topbar.disabled = !this.beaShellOptions.topbar.disabled;
  }
  
  toggleSidebarDisabled(){
    this.beaShellOptions.sidebar.disabled = !this.beaShellOptions.sidebar.disabled;
  }
  toggleSidebarPlacement(){
    let placement: 'left' | 'right' = 'left';
    if(this.beaShellOptions.sidebar.placement == 'left')
      placement = 'right';
    this.beaShellOptions.sidebar.placement = placement;
  }
  toggleSidebarAlwaysExpandable(){
    this.beaShellOptions.sidebar.alwaysExpandable = !this.beaShellOptions.sidebar.alwaysExpandable;
  }
  expandSidebar(){
    this.beaShellComponent.beaShell.expandSidebar();
  }
  retractSidebar(){
    this.beaShellComponent.beaShell.retractSidebar();
  }
}
