export class UserModel {
  UserId: number = 0;
  FullName: string | null = null;
  EmailId: string | null = null;
  AddressLine1: string | null = null;
  AddressLine2?: string | null = null;
  City?: string | null = null;
  ProfilePicUrl?: string | null = null;
  Password: string | null = null;
  Role: string | null = null;
}
export class LoginModel {
  EmailId: string = '';
  Password: string = '';
}

export class ApiResponse {
  Message: string = '';
  Data?: any = '';
}
