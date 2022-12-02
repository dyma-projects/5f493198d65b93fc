import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el?: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  addUser() {
    if (this.el?.nativeElement.value) {
      this.userService.addUser(this.el?.nativeElement.value);
      this.el.nativeElement.value = '';
    }
  }
}
