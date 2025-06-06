import { Prisma, PrismaClient } from 'generated/prisma';
import { PERMISSION_REGISTRY_SET } from 'src/modules/permission-registry/constants/permission-registry.constant';

export async function seedPermissions(prisma: PrismaClient) {
  for (const scope of PERMISSION_REGISTRY_SET) {
    console.log(`can ${scope.replace(':', ' ')}`);
  }

  const roles: Prisma.PermissionCreateInput[] = [
    {
      scope: '',
      description: '',
    },
  ];

  // try {
  //   await prisma.permission.createMany({
  //     data: roles,
  //     skipDuplicates: true,
  //   });
  //   console.log('Permissions seeded successfully');
  // } catch (error) {
  //   console.error('Failed to seed permissions:', error);
  // }
}
