import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  currentUser: any;
  users: any[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAll(1).pipe(first()).subscribe(users => {
      debugger
      this.users = users;
  });
  }


}
