import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { GetAllUserDto } from './dto/get-all.user.dto';
import { GetByIdUserDto } from './dto/get-by-id.user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<GetAllUserDto> {
    const users = await this.userService.findAll();
    const mappedUsers = users.map((u) => {
      const { description, ...user } = u;
      return user;
    });
    return { users: mappedUsers };
  }

  @Get(':id(\\d+)')
  async getOneById(@Param('id') id: string): Promise<GetByIdUserDto> {
    const user = await this.userService.findById(Number(id));

    if (!user) {
      throw new NotFoundException(`User ID=${id} is not found.`);
    }

    return { user };
  }
}
