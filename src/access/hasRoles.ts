import { Role } from 'src/collections/users'

export const hasOneOfRoles = ({ req: { user } }, roles: Role[]) =>
  user && roles.includes(user.role);
