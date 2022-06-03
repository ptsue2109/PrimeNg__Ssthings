import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/authService.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Register');
  }

  onSubmit(formData: { email: string; password: string; username: string, phoneNumber: string }) {
    this.authService.authRegister(formData).subscribe({
      next: (data) => {
        const res = { data: data.user };
        if (res) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register success' })
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }
      },
      error: ({ error }) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.message}` })
        console.log(`${error.message}`);

      },
    }
    );
  }
}
