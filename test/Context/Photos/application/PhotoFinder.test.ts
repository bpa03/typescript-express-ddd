import { PhotoFinder } from '../../../../src/Context/Photos/application/PhotoFinder';
import { PhotoRepositoryMock } from '../__mocks__/PhotoRepositoryMock';

let finder: PhotoFinder;
let repository: PhotoRepositoryMock;

beforeEach(() => {
  repository = new PhotoRepositoryMock();
  finder = new PhotoFinder(repository);
});

describe('Photo Finder', () => {
  test('Should search all photos', async () => {
    const { photos } = await finder.exec();

    expect(photos).toBeInstanceOf(Array);
    repository.assertSearchAllHaveBeenCalled();
  });
});
