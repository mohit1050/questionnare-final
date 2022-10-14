import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users?:Registration[];
  currentuser:Registration={};
  currentindex=-1;
  uname='';

  constructor(private obj:RegistrationService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers():void{
    this.obj.getAllUsers().subscribe(
      data=>{
        this.users=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  setUsers(obj1:Registration,index:number):void{
    this.currentuser=obj1;
    this.currentindex=index;
  }

}
