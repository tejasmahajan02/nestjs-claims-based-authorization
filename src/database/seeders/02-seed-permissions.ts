import { Prisma, PrismaClient } from 'generated/prisma';
import { GLOBAL_SCOPES_ARRAY } from 'src/modules/permission-registry/constants/permission-registry.constant';

function generateDescription(scope: string): string {
  const [action, resource] = scope.split(':');
  return `Allows user to ${action} a ${resource.replace(/-/g, ' ')}`;
}

export async function seedPermissions(prisma: PrismaClient) {
  const permissions: Prisma.PermissionCreateInput[] = GLOBAL_SCOPES_ARRAY.map(
    (scope: string): Prisma.PermissionCreateInput => {
      return {
        scope,
        description: generateDescription(scope),
      };
    },
  );

  try {
    await prisma.permission.createMany({
      data: permissions,
      skipDuplicates: true,
    });
    console.log('Permissions seeded successfully');
  } catch (error) {
    console.error('Failed to seed permissions:', error);
  }
}
