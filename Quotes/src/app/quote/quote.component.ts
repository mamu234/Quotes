import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'African Quotes',description:'These are common African proverbs to instill good behaviour'},
    {id:3,name:'Common Quotes',description:'These are general quotes used everyday'},
    {id:4,name:'easy Quotes',description:'These quotes are easy to understand'},
    {id:5,name:'scholarly Quotes',description:' Quotes by famous authors'},
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
