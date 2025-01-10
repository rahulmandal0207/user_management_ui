import { Component, inject } from '@angular/core';
import { UserModel } from '../../core/models/model-class';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ConstantData } from '../../core/constant/constant-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  loggedUserId: number = 0;
  userObj: UserModel = new UserModel();
  currentId: number = 0;
  activeRoute = inject(ActivatedRoute);

  constructor(private service: UserService) {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const parsedData = JSON.parse(loggedUser);
      if (parsedData.Role == 'User') {
        this.loggedUserId = parsedData.UserId;
        this.getUserById(this.loggedUserId);
      }
    }

    this.activeRoute.params.subscribe((res: any) => {
      debugger;
      this.currentId = res.id;
      this.getUserById(this.currentId);
    });
  }

  creatUser() {
    console.log(this.userObj);
    this.userObj.Role = 'User';
    this.service.createUser(this.userObj).subscribe((res: any) => {
      if (res.Message == ConstantData.Success) {
        alert('User Created Successfully');
      } else {
        alert('User not created');
      }
    });
  }

  getUserById(userId: number) {
    this.service.getUserById(userId).subscribe((res: any) => {
      if (res.Message == ConstantData.Success) {
        console.log(res.Data);
        this.userObj = res.Data;
      } else {
        console.log('Error while getting user by id');
      }
    });
  }

  updateUser() {
    this.service
      .updateUser(this.userObj.UserId, this.userObj)
      .subscribe((res: any) => {
        if (res.Message == ConstantData.Success) {
          console.log('Success');
        } else {
          console.log('Error updating');
        }
      });
  }
}
