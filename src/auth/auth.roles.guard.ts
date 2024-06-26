import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserRole } from '../repositores/user.entity.roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private roles: UserRole[]) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.roles.includes(user.role);
  }
}
