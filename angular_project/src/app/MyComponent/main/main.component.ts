import { Component, OnInit } from '@angular/core';
import { Main} from "../../Main";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  main:Main[] | undefined;
  constructor() {
    this.main=[
      {
        name: "Zain",
        title:"Great",
        description: "This is Great",
        phone:12
      },
      {
        name: "Farrukh",
        title:"Average",
        description: "This is Average",
        phone:11
      },
      {
        name: "Zain",
        title:"Great",
        description: "This is Great",
        phone:12
      }
      
    ]
   }

  ngOnInit(): void {
  }

}
