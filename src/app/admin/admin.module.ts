import { Module } from '@nestjs/common';
import { AdminsService } from './admin.service';
import { AdminController } from './admins.controller';
import { PrismaModule } from 'src/db/prisma.module';
import { UsersModule } from 'src/app/users/users.module';
import { CustomJwtModule } from 'src/app/jwt/jwt.module';
import { AdminResolver } from './admin.resolver';

@Module({
  imports: [CustomJwtModule, PrismaModule, UsersModule],
  providers: [AdminsService, AdminResolver],
  controllers: [AdminController],
})
export class AdminsModule {}