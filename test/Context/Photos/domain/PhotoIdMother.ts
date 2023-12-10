import { PhotoId } from '../../../../src/Context/Photos/domain/PhotoId';
import { UuidMother } from '../../Shared/UuidMother';

export class PhotoIdMother {
  static random (): PhotoId {
    return this.create(UuidMother.random());
  }

  static create (value: string): PhotoId {
    return new PhotoId(value);
  }
}
