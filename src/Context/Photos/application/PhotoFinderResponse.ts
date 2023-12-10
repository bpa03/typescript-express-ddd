import { type Photo } from '../domain/Photo';
import { type PhotoResponse } from './PhotoResponse';

export class PhotoFinderResponse {
  public readonly photos: PhotoResponse[];

  constructor (photos: Photo[]) {
    this.photos = photos.map((photo) => photo.toPrimitives());
  }
}
