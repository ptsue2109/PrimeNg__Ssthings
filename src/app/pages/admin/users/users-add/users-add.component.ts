import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService.service';
import { UploadImgService } from '../../../../services/upload-img.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
  roles: any[] = [
    { name: 'USER', value: 'user' },
    { name: 'ADMIN', value: 'admin' },
  ];
  file: any = [];
  selected: string = '';
  constructor( private UserService: UserService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadImgService,
    private title: Title) { }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  ngOnInit(): void {
    this.title.setTitle('Admin | Users - Add')
  }
  userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    desc: new FormControl(),
    password: new FormControl(),
    username: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    role: new FormControl(),
    image: new FormControl(),
  });
  addUser() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...'})
    setTimeout(() => {
      let userData: any = {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        username: this.userForm.value.username,
        phoneNumber: this.userForm.value.phoneNumber,
        address: this.userForm.value.address,
        desc: this.userForm.value.desc,
        image: localStorage.getItem('imgThum'),
        role: this.selected,
      };
      this.UserService.addUsers(userData).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/users']);
            localStorage.removeItem('imgThum');
          }, 300);
        },
        error: ({error}) => {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: `${error}`})
          localStorage.removeItem('imgThum');
        },
      });
    }, 6000);

    //
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file); 
  }
}