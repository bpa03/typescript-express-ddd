import { PhotoCreator } from '../../../../src/Context/Photos/application/PhotoCreator';
import { PhotoRepositoryMock } from '../__mocks__/PhotoRepositoryMock';
import { PhotoUrlIsInvalid } from '../../../../src/Context/Photos/domain/PhotoUrlIsInvalid';
import { CreatePhotoRequestMother } from './CreatePhotoRequestMother';
import { PhotoMother } from '../domain/PhotoMother';
import { type PhotoCreatorRequest } from '../../../../src/Context/Photos/application/PhotoCreatorRequest';
import { type Photo } from '../../../../src/Context/Photos/domain/Photo';

let creator: PhotoCreator;
let repository: PhotoRepositoryMock;

beforeEach(() => {
  repository = new PhotoRepositoryMock();
  creator = new PhotoCreator(repository);
});

describe('Photo Creator', () => {
  test('Should create a valid photo', async () => {
    const request = CreatePhotoRequestMother.random();
    const photo = PhotoMother.fromRequest(request);

    await creator.exec(request);
    repository.assertSaveHaveBeenCalledWith(photo);
  });

  test('Should throw error if photo url is invalid', async () => {
    let request: PhotoCreatorRequest;
    let photo: Photo;

    expect(() => {
      request = CreatePhotoRequestMother.requestWithInvalidUrl();
      photo = PhotoMother.fromRequest(request);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      creator.exec(request);
      repository.assertSaveHaveBeenCalledWith(photo);
    }).toThrow(PhotoUrlIsInvalid);
  });
});
