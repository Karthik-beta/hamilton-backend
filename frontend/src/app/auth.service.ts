import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedInUserName = new BehaviorSubject<string>(''); // Create a BehaviorSubject to store the loggedInUserName

  constructor() { }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

 



  logout() {
    this.loggedIn.next(false);
    this.loggedInUserName.next('');
  }

}
