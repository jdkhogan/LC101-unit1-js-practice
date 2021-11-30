import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() flights: Flight[] = [];
  @Input() type: string = "";
  
  constructor() { }

  ngOnInit() {
    
  }

}
