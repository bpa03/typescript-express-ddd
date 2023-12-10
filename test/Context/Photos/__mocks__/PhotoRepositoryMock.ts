import { type PhotoRepository } from '../../../../src/Context/Photos/domain/PhotoRepository';
import { type Photo } from '../../../../src/Context/Photos/domain/Photo';

export class PhotoRepositoryMock implements PhotoRepository {
  private readonly saveMock: jest.Mock;
  private readonly searchAllMock: jest.Mock;
  private readonly photos: Photo[];

  constructor (photos: Photo[] = []) {
    this.saveMock = jest.fn();
    this.searchAllMock = jest.fn();
    this.photos = [];
  }

  async searchAll (): Promise<Photo[]> {
    await this.searchAllMock();
    return this.photos;
  };

  async save (photo: Photo): Promise<void> {
    await this.saveMock(photo);
  };

  assertSearchAllHaveBeenCalled (): void {
    expect(this.searchAllMock).toHaveBeenCalledTimes(1);
  }

  assertSaveHaveBeenCalledWith (expected: Photo): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
}
