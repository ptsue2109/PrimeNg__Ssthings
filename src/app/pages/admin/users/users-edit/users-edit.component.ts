import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from './../../../../services/userService.service';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {
  dataUser: any = [];
  id: string;
  file: any = [];
  selected: string = '';
  OldImage: string | null | undefined;
  newImg: string | null | undefined;

  roles: any[] = [
    { name: 'USER', value: 'user' },
    { name: 'ADMIN', value: 'admin' },
  ];
  constructor(
    private UserService: UserService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private uploadFile: UploadImgService,
    private title: Title,
    private messageService: MessageService,
  ) {
    this.id = '';
  }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.UserService.getOneUser(this.id).subscribe((dataUser) => {
      this.dataUser = dataUser;
      this.selected=  dataUser.role
      this.OldImage = dataUser.image;
    });
    this.title.setTitle('Admin | Users - Edit')
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
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  editUser() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Loading...'})

    setTimeout(() => {
      let userData: any = {
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        username: this.userForm.value.username,
        phoneNumber: this.userForm.value.phoneNumber,
        address: this.userForm.value.address,
        desc: this.userForm.value.desc,
        image: this.newImg ? this.newImg : this.OldImage,
        role: this.selected,
      };
      this.UserService.editUser(userData, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
          setTimeout(() => {
            this.router.navigate(['/admin/users']);
            localStorage.removeItem('imgThum');
          },300)
         
        },
        error: ({ error }) => {
          this.messageService.add({ severity: 'error', summary: 'Success', detail: `${error}`})
          localStorage.removeItem('imgThum');
        },
      });
    }, 6000);
  }
}
