import { PhotoId } from './PhotoId';
import { PhotoDescription } from './PhotoDescription';
import { PhotoUrl } from './PhotoUrl';
import { type AggregateRoot } from '../../Shared/domain/AggregateRoot';

export class Photo implements AggregateRoot {
  readonly id: PhotoId;
  readonly description: PhotoDescription;
  readonly photoUrl: PhotoUrl;

  constructor ({ id, description, photoUrl }: { id: PhotoId, description: PhotoDescription, photoUrl: PhotoUrl }) {
    this.id = id;
    this.description = description;
    this.photoUrl = photoUrl;
  }

  static fromPromitives (plainDate: { id: string, description: string, photoUrl: string }): Photo {
    return new Photo({
      id: new PhotoId(plainDate.id),
      description: new PhotoDescription(plainDate.description),
      photoUrl: new PhotoUrl(plainDate.photoUrl)
    });
  }

  toPrimitives (): any {
    return {
      id: this.id.value,
      description: this.description.value,
      photoUrl: this.photoUrl.value
    };
  }
}
