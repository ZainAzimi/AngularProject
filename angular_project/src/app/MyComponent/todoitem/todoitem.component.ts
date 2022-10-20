import { Component, Input, OnInit } from '@angular/core';
import { Main } from 'src/app/Main'; 

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input()
  main!: Main;
  constructor() { }

  ngOnInit(): void {
  }

}
