import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async  create(
    @Body() CreateMenuDto: CreateMenuDto
  ) {
    try{
      await this.userService.create(
        CreateMenuDto,
      );
      return { 
        // success: this.userService.create(CreateMenuDto),
        // success: true,
        success: CreateMenuDto,
        message:  'User created successfully',
      };
    } catch(error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateMenuDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
