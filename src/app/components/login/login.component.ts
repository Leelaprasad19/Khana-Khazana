import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username:any = ''
  password:any = '';

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private users:UsersService, private RouterInstance:Router){
  }

  myusers = this.users.getUser();

  getUserFromHTML(){

    var flag=0;

    for(var i=0;i<this.myusers.length;i++){
      if(this.myusers[i].username==this.username && this.myusers[i].password==this.password){
        flag = 1;
        break
      }
    }

    if(flag){
        alert("Login Successful");
        this.RouterInstance.navigate(['home']);
    }else{
        alert("Invalid Credentials");
        this.username = ''
        this.password = ''
    }

  }

  ngOnInit(): void {}

}
