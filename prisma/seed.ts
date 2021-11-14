import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.upsert({
    where: {
      email: 'ch.oberhofer@gmail.com',
    },
    create: {
      email: 'ch.oberhofer@gmail.com',
      id: 'ckvzbg1bh0016sdnst0dbnklr',
      calendar: {
        create: {
          days: {
            create: new Array(24)
              .fill(0)
              .map((_, i) => ({ dayOfMonth: i + 1, style: '' })),
          },
        },
      },
    },
    update: {},
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
