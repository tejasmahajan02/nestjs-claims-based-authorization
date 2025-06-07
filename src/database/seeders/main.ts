import { PrismaClient } from 'generated/prisma';
import { Roles } from '../enums/roles.enum';
import { GLOBAL_SCOPES_ARRAY } from 'src/modules/permission-registry/constants/permission-registry.constant';
import { generateDescription } from '../utils/helpers.util';

const prisma = new PrismaClient();

async function main() {
  console.log('[DatabaseSeeder] Starting seed...');

  const role = {
    name: Roles.SUPER_ADMIN,
    description:
      'Has access to tenant-management, user-management, and global configurations across the system.',
  };

  try {
    await prisma.role.create({
      data: {
        ...role,
        RolePermission: {
          create: GLOBAL_SCOPES_ARRAY.map((scope: string) => ({
            permission: {
              connectOrCreate: {
                where: { scope },
                create: { scope, description: generateDescription(scope) },
              },
            },
          })),
        },
      },
      include: {
        RolePermission: {
          include: { permission: true },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log('[DatabaseSeeder] Database has been seeded successfully.');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
