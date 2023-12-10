import { PrismaRepository } from '../../../Shared/infrastructure/persistence/prisma/PrismaRepository';
import { Photo } from '../../domain/Photo';
import { type PhotoRepository } from '../../domain/PhotoRepository';

export class PrismaPhotoRepository extends PrismaRepository implements PhotoRepository {
  async save (photo: Photo): Promise<void> {

  };

  async searchAll (): Promise<Photo[]> {
    const client = await this.client();
    const photos = await client.photo.findMany();
    return photos.map((photo) => Photo.fromPromitives(photo));
  };
}
