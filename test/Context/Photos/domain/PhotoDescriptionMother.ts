import { PhotoDescription } from '../../../../src/Context/Photos/domain/PhotoDescription';
import { WordMother } from '../../Shared/WordMother';

export class PhotoDescriptionMother {
  static random (): PhotoDescription {
    return this.create(WordMother.random());
  }

  static create (value: string): PhotoDescription {
    return new PhotoDescription(value);
  }
}
