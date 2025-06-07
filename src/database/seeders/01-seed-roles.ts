import { Prisma, PrismaClient } from 'generated/prisma';
import { Roles } from '../enums/roles.enum';

export async function seedRoles(prisma: PrismaClient) {
  const roles: Prisma.RoleCreateInput[] = [
    {
      name: Roles.SUPER_ADMIN,
      description:
        'Has access to tenant-management, user-management, and global configurations across the system.',
    },
  ];

  try {
    await prisma.role.createMany({
      data: roles,
      skipDuplicates: true,
    });
    console.log('Roles seeded successfully');
  } catch (error) {
    console.error('Failed to seed roles:', error);
  }
}
