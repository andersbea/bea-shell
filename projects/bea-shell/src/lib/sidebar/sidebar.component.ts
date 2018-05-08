import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  visible: boolean = true;
  
  menuItems: any[] = [
    { title: "Home" },
    { 
      title: "Pricing", 
      subitems: [ 
        { title:"Cheap" },
        { title:"Expensive" }
      ] 
    },
    { title: "About" }
  ];  

  constructor() { }

  ngOnInit() {
  }

}
