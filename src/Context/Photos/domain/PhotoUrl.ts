/* eslint-disable no-useless-escape */
import { PhotoUrlIsInvalid } from './PhotoUrlIsInvalid';

export class PhotoUrl {
  value: string;

  constructor (url: string) {
    this.ensureIsValidUrl(url);
    this.value = url;
  }

  private ensureIsValidUrl (url: string): void {
    const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    if (!regex.test(url)) {
      throw new PhotoUrlIsInvalid(`The Photo Url ${url} is not a valid url`);
    }
  }
}
