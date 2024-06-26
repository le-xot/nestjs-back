import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  PrismaUserRepository,
  UsersInjectSymbol,
} from '../repositores/user.repository';
import { PrismaModule } from 'src/db/prisma.module';
import { CustomJwtModule } from 'src/jwt/jwt.module';

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [
    { provide: UsersInjectSymbol, useClass: PrismaUserRepository },
    UsersService,
  ],
  controllers: [UsersController],
  exports: [UsersInjectSymbol],
})
export class UsersModule {}
