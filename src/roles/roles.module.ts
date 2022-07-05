import { UserModel } from './../users/users.model';
import { RoleModel } from './roles.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRolesModel } from './user-roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRolesModel])],
  exports: [RolesService],
})
export class RolesModule {}
