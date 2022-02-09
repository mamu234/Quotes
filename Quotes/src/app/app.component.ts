import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
  {id:1, name:'African Quotes',description:'These are common African proverbs to instill good behaviour'},
  {id:2,name:'Famous Quotes',description:'These are general quotes used everyday'},
  {id:3,name:'Common Quotes',description:'These quotes are easy to understand'},
  {id:4,name:'easy Quotes',description:'These quotes are easy to understand'},
  {id:5,name:'scholarly Quotes',description:'These quotes are easy to understand'},

];
}