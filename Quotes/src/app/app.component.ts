import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
  new Quote(1,'African Quotes','Only a fool tests the depth of a river with both feet',new Date(2020,3,14)),
  new Quote (2,'Common Quotes','A stich in timesaves nine',new Date(2020,3,14)),
  new Quote(3, 'easy Quotes','Get busy living or get busy dying',new Date(2020,3,14)),
  new Quote (4,'scholarly Quotes','Many of life’s failures are people who did not realize how close they were to success when they gave up.',new Date(2020,3,14)),
  

];
}