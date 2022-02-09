import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
  new Quote(1,'African Quotes','These are common African proverbs to instill good behaviour'),
  new Quote (2,'Common Quotes','These are general quotes used everyday'),
  new Quote(3, 'easy Quotes','These quotes are easy to understand'),
  new Quote (4,'scholarly Quotes','Quotes by famous authors'),
];
}