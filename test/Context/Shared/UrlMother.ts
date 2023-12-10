import { MotherCreator } from './MotherCreator';

export class UrlMother {
  static random (): string {
    return MotherCreator.random().internet.url();
  }
}
