import { Component } from '@angular/core';
import { ApiResponse, LoginModel } from '../../core/models/model-class';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData: LoginModel = new LoginModel();

  constructor(private service: UserService, private router: Router) {}

  onLogin() {
    //debugger;
    this.service.login(this.loginData).subscribe((res: any) => {
      //debugger;
      if (res.Message == 'Success') {
        localStorage.setItem('loggedUser', JSON.stringify(res.Data));
        if (res.Data.Role == "Admin") {
          this.router.navigateByUrl('user-list');
        } else {
          this.router.navigateByUrl("create-user")
        }
      } else {
        alert(res.Message);
      }
    });
  }
}
