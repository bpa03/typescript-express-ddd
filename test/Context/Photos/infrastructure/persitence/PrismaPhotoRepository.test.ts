import { PrismaClientFactory } from '../../../../../src/Context/Shared/infrastructure/persistence/prisma/PrismaClientFactory';
import { PrismaPhotoRepository } from '../../../../../src/Context/Photos/infrastructure/persitence/PrismaPhotoRepository';
import { Photo } from '../../../../../src/Context/Photos/domain/Photo';

let repository: PrismaPhotoRepository;

beforeEach(() => {
  repository = new PrismaPhotoRepository(PrismaClientFactory.createClient());
});

describe('Prisma Photo Repository', () => {
  test('Should search photos', async () => {
    const photos = await repository.searchAll();
    expect(photos).toBeInstanceOf(Array);
    expect(photos[0]).toBeInstanceOf(Photo);
  });
});
