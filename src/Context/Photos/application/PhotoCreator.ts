import { Photo } from '../domain/Photo';
import { PhotoId } from '../domain/PhotoId';
import { PhotoDescription } from '../domain/PhotoDescription';
import { PhotoUrl } from '../domain/PhotoUrl';
import { type PhotoCreatorRequest } from './PhotoCreatorRequest';
import { type PhotoRepository } from '../domain/PhotoRepository';

export class PhotoCreator {
  constructor (private readonly repository: PhotoRepository) {}

  async exec (request: PhotoCreatorRequest): Promise<Photo> {
    const photo = new Photo({
      id: new PhotoId(request.photoId),
      description: new PhotoDescription(request.description),
      photoUrl: new PhotoUrl(request.photoUrl)
    });

    await this.repository.save(photo);
    return photo;
  }
}
