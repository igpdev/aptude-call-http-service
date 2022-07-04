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
    // 1. Call the getUsers service to assign the data into the users varaible
    // 2. In the same service call assignment, set the serviceCalled property to true.
  }
}
