import { MotherCreator } from './MotherCreator';

export class WordMother {
  static random ({ min, max }: { min: number, max: number } = { max: 5, min: 1 }): string {
    return MotherCreator.random().lorem.words({ min, max });
  }
}
