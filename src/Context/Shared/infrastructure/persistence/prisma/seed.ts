import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const client = new PrismaClient();

async function main (): Promise<void> {
  await client.$connect();
  await client.photo.createMany({
    data: [
      {
        id: uuid(),
        description: 'some-descripition',
        photoUrl: 'https://api.unsplash.com/example'
      },
      {
        id: uuid(),
        description: 'some-descripition',
        photoUrl: 'https://api.unsplash.com/example'
      },
      {
        id: uuid(),
        description: 'some-descripition',
        photoUrl: 'https://api.unsplash.com/example'
      }
    ]
  });
}

main().then(async () => {
  await client.$disconnect();
}).catch(async (e) => {
  console.log(e);
  await client.$disconnect();
  process.exit(1);
});
