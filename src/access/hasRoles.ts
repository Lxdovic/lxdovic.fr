import { Role } from '@/collections/Users'

export const hasOneOfRoles = ({ req: { user } }, roles: Role[]) =>
  user && roles.includes(user.role);
