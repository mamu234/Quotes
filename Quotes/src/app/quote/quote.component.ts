import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'African Quotes','Only a fool tests the depth of a river with both feet',new Date(2020,3,14)), 
    new Quote (2,'Common Quotes','A stich in timesaves nine',new Date(2020,3,14)),
    new Quote(3, 'easy Quotes','Get busy living or get busy dying',new Date(2020,3,14)),
    new Quote (4,'scholarly Quotes','Many of life’s failures are people who did not realize how close they were to success when they gave up.',new Date(2020,3,14)),
    
  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
