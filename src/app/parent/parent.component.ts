import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  users: User[];
  serviceCalled: Boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Call the getUsers service to assign the data into the users varaible.
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.serviceCalled = true;
    });
  }
}
