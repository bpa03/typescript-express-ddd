import { deserialize, serialize } from 'bson';
import { v4 as uuid } from 'uuid';
import path from 'path';
import fs from 'fs/promises';
import { Photo } from '../../domain/Photo';
import { type PhotoRepository } from '../../domain/PhotoRepository';

export class FilePhotoRepository implements PhotoRepository {
  private readonly FILE_PATH = path.join(__dirname, '/photos');
  private readonly photos = [Photo.fromPromitives({
    id: uuid(),
    description: 'some-description',
    photoUrl: 'https://api.unsplash.com/example'
  }), Photo.fromPromitives({
    id: uuid(),
    description: 'some-description',
    photoUrl: 'https://api.unsplash.com/example'
  }), Photo.fromPromitives({
    id: uuid(),
    description: 'some-description',
    photoUrl: 'https://api.unsplash.com/example'
  })];

  async save (photo: Photo): Promise<void> {
    const { id, description, photoUrl } = photo.toPrimitives();
    await fs.writeFile(this.filePath(id), serialize({ id, description, photoUrl }));
  };

  private filePath (id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }

  async searchAll (): Promise<Photo[]> {
    return this.photos;
  };

  async search (photoId: string): Promise<Photo> {
    const photoData = await fs.readFile(this.filePath(photoId));
    const { id, description, photoUrl } = deserialize(photoData);

    return Photo.fromPromitives({ id, description, photoUrl });
  }
}
