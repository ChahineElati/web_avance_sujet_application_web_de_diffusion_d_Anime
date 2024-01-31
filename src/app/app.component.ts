import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnimeShout';
  email: string = '';
  pw: string = '';
  loggedUser: any = {};
  authenticated: Boolean = false;

  constructor(private userService: UserService) { }

  login() {
    this.userService.findUser(this.email).subscribe(user => {
      if (user) {
        if (user.password = this.pw) {
          this.authenticated = true;
          this.loggedUser = user;
          this.email = "";
          this.pw = "";
        }
      }
    });
  }

  logout() {
    this.authenticated = false;
  }

}
