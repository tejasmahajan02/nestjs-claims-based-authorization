import { PrismaClient } from 'generated/prisma';
import { GLOBAL_SCOPES_ARRAY } from 'src/modules/permission-registry/constants/permission-registry.constant';
import { Roles } from '../enums/roles.enum';

export async function seedRolePermissions(prisma: PrismaClient) {
  const superAdminRoles = await prisma.role.findMany({
    where: {
      name: Roles.SUPER_ADMIN,
      tenantId: null,
    },
    select: { id: true },
  });

  if (!superAdminRoles.length) {
    console.log(
      `Found ${superAdminRoles.length} ${Roles.SUPER_ADMIN} role(s) for global tenant.`,
    );
    return;
  }

  const globalPermissions = await prisma.permission.findMany({
    where: {
      scope: { in: GLOBAL_SCOPES_ARRAY },
      tenantId: null,
    },
    select: { id: true },
  });

  if (!globalPermissions.length) {
    console.log(
      `Found ${globalPermissions.length} permission(s) for global tenant.`,
    );
    return;
  }

  const rolePermissions = superAdminRoles.flatMap((role) =>
    globalPermissions.map((permission) => ({
      roleId: role.id,
      permissionId: permission.id,
    })),
  );

  try {
    await prisma.rolePermission.createMany({
      data: rolePermissions,
      skipDuplicates: true,
    });
    console.log('Role Permissions seeded successfully');
  } catch (error) {
    console.error('Failed to seed role permissions:', error);
  }
}
