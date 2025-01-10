import { Component, inject, OnInit } from '@angular/core';
import { UserModel } from '../../core/models/model-class';
import { UserService } from '../../core/services/user.service';
import { ConstantData } from '../../core/constant/constant-data';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: UserModel[] = [];
  router = inject(Router);

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.service.getAllUsers().subscribe((res: any) => {
      if (res.Message == ConstantData.Success) {
        this.userList = res.Data;
      } else {
        alert(res.Message);
      }
    });
  }

  editUser(id: number) {
    this.router.navigate(['edit-user', id]);
  }

  deleteUser(id: number) {
    if (confirm('Are you sure ? You want to delte this record!')) {
      this.service.deleteUser(id).subscribe((res: any) => {
        if ((res.Message = ConstantData.Success)) {
          alert('User delete Succesfully');
          this.getAllUser();
        } else {
          alert(res.Message);
        }
      });
    }
  }
}
