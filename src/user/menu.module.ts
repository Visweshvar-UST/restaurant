import { Module } from '@nestjs/common';
import { UserService } from './menu.service';
import { UserController } from './menu.controller';
import { User } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // This allos NestJS to inject the User repository
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:  [UserService],

})
export class UserModule {}
