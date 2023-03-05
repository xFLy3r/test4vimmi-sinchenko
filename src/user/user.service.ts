import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      new User(
        1,
        'Danylo',
        'datus3r@gmail.com',
        'Cherkasy',
        'Just a common software developer.',
      ),
      new User(2, 'Bob', 'bobbob@gmail.com', 'London', "Don't trust me."),
      new User(
        3,
        'Unknown aka undefined',
        'undefined@gmail.com',
        'Berlin',
        'I do not prefer to leave long descriptions, but...................................................................',
      ),
      new User(4, 'Angela', 'angela.s@gmail.com', 'Barselona', 'Ola!'),
      new User(
        6,
        'Random user',
        'random.u@gmail.com',
        'Barselona',
        'Random user',
      ),
      new User(
        7,
        'Random user',
        'random.u@gmail.com',
        'Barselona',
        'Random user!',
      ),
      new User(
        8,
        'Random user',
        'random.u@gmail.com',
        'Barselona',
        'Random user!',
      ),
    ];
  }

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findById(id: number): Promise<User> {
    return Promise.resolve(this.users.find((u) => u.id === id));
  }
}
