import { PrismaClient } from 'generated/prisma';
import { seedRoles } from './01-seed-roles';
import { seedPermissions } from './02-seed-permissions';

const prisma = new PrismaClient();

async function main() {
  console.log('[DatabaseSeeder] Starting seed...');

  await seedRoles(prisma);
  await seedPermissions(prisma);

  console.log('[DatabaseSeeder] Database has been seeded successfully.');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
