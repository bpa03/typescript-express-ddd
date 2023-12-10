import { type PhotoCreatorRequest } from '../../../../src/Context/Photos/application/PhotoCreatorRequest';
import { Photo } from '../../../../src/Context/Photos/domain/Photo';
import { PhotoDescription } from '../../../../src/Context/Photos/domain/PhotoDescription';
import { PhotoId } from '../../../../src/Context/Photos/domain/PhotoId';
import { PhotoUrl } from '../../../../src/Context/Photos/domain/PhotoUrl';

export class PhotoMother {
  static create (id: PhotoId, description: PhotoDescription, url: PhotoUrl): Photo {
    return new Photo({ id, description, photoUrl: url });
  }

  static fromRequest (request: PhotoCreatorRequest): Photo {
    return this.create(
      new PhotoId(request.photoId),
      new PhotoDescription(request.description),
      new PhotoUrl(request.photoUrl)
    );
  }
}
