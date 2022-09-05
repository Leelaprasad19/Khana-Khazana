import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = [{'username' : 'PLP', 'password' : '123'}]

  getUser() {
    return  this.user;
  }
}
