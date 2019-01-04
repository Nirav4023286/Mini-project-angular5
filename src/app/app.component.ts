import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  months = ['January', 'Feburary', 'March', 'April'];
  isavailable = false;
  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
 }
}
