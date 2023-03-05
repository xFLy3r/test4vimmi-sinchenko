interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  description: string;
}

export class GetByIdUserDto {
  user: User;
}
