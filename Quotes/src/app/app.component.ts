import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
  {id:1, name:'African Quotes'},
  {id:2,name:'Famous Quotes'},
  {id:3,name:'Common Quotes'},
  {id:4,name:' easy Quotes'},
  {id:5,name:' scholarly Quotes'},

];
}