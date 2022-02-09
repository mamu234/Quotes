import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'African Quotes','Only a fool tests the depth of a river with both feet'),
    new Quote (2,'Common Quotes','A stich in timesaves nine'),
    new Quote(3, 'easy Quotes','Get busy living or get busy dying'),
    new Quote (4,'scholarly Quotes','Many of life’s failures are people who did not realize how close they were to success when they gave up.'),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
