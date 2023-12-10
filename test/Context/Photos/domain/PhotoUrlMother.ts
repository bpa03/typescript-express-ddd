import { PhotoUrl } from '../../../../src/Context/Photos/domain/PhotoUrl';
import { UrlMother } from '../../Shared/UrlMother';
import { WordMother } from '../../Shared/WordMother';

export class PhotoUrlMother {
  static random (): PhotoUrl {
    return this.create(UrlMother.random());
  }

  static create (value: string): PhotoUrl {
    return new PhotoUrl(value);
  }

  static invalidUrl (): PhotoUrl {
    return this.create(WordMother.random());
  }
}
