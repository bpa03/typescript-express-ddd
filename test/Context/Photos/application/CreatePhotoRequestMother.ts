import { type PhotoId } from '../../../../src/Context/Photos/domain/PhotoId';
import { type PhotoDescription } from '../../../../src/Context/Photos/domain/PhotoDescription';
import { type PhotoUrl } from '../../../../src/Context/Photos/domain/PhotoUrl';
import { type PhotoCreatorRequest } from '../../../../src/Context/Photos/application/PhotoCreatorRequest';
import { PhotoIdMother } from '../domain/PhotoIdMother';
import { PhotoDescriptionMother } from '../domain/PhotoDescriptionMother';
import { PhotoUrlMother } from '../domain/PhotoUrlMother';

export class CreatePhotoRequestMother {
  static create (id: PhotoId, description: PhotoDescription, url: PhotoUrl): PhotoCreatorRequest {
    return { photoId: id.value, description: description.value, photoUrl: url.value };
  }

  static random (): PhotoCreatorRequest {
    return this.create(PhotoIdMother.random(), PhotoDescriptionMother.random(), PhotoUrlMother.random());
  }

  static requestWithInvalidUrl (): PhotoCreatorRequest {
    return this.create(PhotoIdMother.random(), PhotoDescriptionMother.random(), PhotoUrlMother.invalidUrl());
  }
}
