import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before' + this.isUserLoggedIN());
    if (username === 'nishant' && password === 'dummy') {
      sessionStorage.setItem('authenticateruser', username);
      console.log('before' + this.isUserLoggedIN());
      return true;
    }
    return false;

  }

  isUserLoggedIN() {

    const user = sessionStorage.getItem('authenticateruser');
    return !(user === null);
  }
}
