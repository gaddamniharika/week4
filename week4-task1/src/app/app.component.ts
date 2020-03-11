import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Number of Users :';
  users = [];
  receiveUserData(name : string)
  {
    this.users.push(name);
  }  
}
