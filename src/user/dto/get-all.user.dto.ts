interface User {
  id: number;
  name: string;
  email: string;
  city: string;
}

export class GetAllUserDto {
  users: User[];
}
