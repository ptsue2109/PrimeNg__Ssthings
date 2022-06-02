import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private toastr: ToastrService) { }

    canActivate(): boolean {
        const loggedInUsers = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (loggedInUsers.email == undefined || loggedInUsers.email == '') {
            this.toastr.error('Đăng nhập để tiếp tục');
            this.router.navigate(['/login']);
            return false;
        }
        if (loggedInUsers.role === 'user') {
            this.toastr.error('Không có quyền truy cập');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}