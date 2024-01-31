import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  name: string = "";
  email: string = "";
  pw: string = "";

  constructor(private userService: UserService, private router: Router) { }

  createUser() {
    console.log("user created");
    this.userService.createUser(this.name, this.email, this.pw).subscribe();
    this.router.navigate(["/"])
  }
  ngOnInit(): void {
  }

}
