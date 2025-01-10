import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserModel } from '../../../core/models/model-class';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router);
  loggedUser = new UserModel();

  constructor() {
    const userData = localStorage.getItem('loggedUser');
    this.loggedUser = userData ? JSON.parse(userData) : new UserModel();
  }

  logout() {
    this.router.navigateByUrl('login');
    localStorage.removeItem('loggedUser');
  }
}
