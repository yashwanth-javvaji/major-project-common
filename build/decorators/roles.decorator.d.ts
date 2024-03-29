import { Role } from '../enums/roles.enum';
export declare const ROLES_KEY = "roles";
export declare const hasRoles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
