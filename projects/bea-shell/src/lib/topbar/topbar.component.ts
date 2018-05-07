import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [
    './topbar.component.scss'
  ]
})
export class TopbarComponent implements OnInit {

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
