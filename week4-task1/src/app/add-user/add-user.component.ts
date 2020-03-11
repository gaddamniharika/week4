import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{
  title = "ADD USER"
  firstname : string ;
  secondname : string;
  name : string;
  @Output() sendUserData = new EventEmitter();
  addUser()
  {
    if((this.firstname.length > 0)&&(this.secondname.length > 0))
    {
      this.name = (this.firstname) +" " +(this.secondname);
      this.sendUserData.emit(this.name);
      this.firstname = "";
      this.secondname = "";
    }
    else
    {
      alert("enter name");
    }
  }
}
