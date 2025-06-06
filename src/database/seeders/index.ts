import { seedRoles } from './01-seed-roles';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  await seedRoles(prisma);
  console.log('[DatabaseSeeder] Database has been seeded successfully.');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
