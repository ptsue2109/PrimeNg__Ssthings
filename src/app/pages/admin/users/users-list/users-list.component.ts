import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/userService.service';
import { Title } from '@angular/platform-browser';
import {  MessageService } from 'primeng/api';
import { swal, swalMessage } from '../../../../shared/swal/swal.module';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService],
})
export class UsersListComponent implements OnInit {
  users: any;
  activityValues: number[] = [0, 100];
  constructor(
    private Title: Title,
    private UserService: UserService,
  ) {}

  ngOnInit(): void {
    this.Title.setTitle('Users - List');
    this.getAllUser();
  }
  getAllUser() {
    this.UserService.getAllUser().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  remove(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.UserService.removeUSer(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.users = this.users.filter((item: any) => item._id !== item);
        })
      }
    });
  }
    
}
