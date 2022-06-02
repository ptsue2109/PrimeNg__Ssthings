import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authService.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Register');
  }
  onSubmit(formData: { email: string; password: string }) {
    this.authService.authLogin(formData).subscribe({
      next: (data) => {
        const res = { data: data.user };
        if (res) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login success' })
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        }
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      },
      error: ({ error }) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.message}` })
        console.log(`${error.message}`);
      },
    });
  }
}