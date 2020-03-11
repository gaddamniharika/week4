import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
@Input() users_list : any ;
  delete(id:number)
  {
    this.users_list.splice(id,1); 
  }
}
