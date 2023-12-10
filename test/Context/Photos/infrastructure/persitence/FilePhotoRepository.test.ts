import { v4 as uuid } from 'uuid';
import { FilePhotoRepository } from '../../../../../src/Context/Photos/infrastructure/persitence/FilePhotoRepository';
import { Photo } from '../../../../../src/Context/Photos/domain/Photo';
import { PhotoId } from '../../../../../src/Context/Photos/domain/PhotoId';
import { PhotoDescription } from '../../../../../src/Context/Photos/domain/PhotoDescription';
import { PhotoUrl } from '../../../../../src/Context/Photos/domain/PhotoUrl';

let repository: FilePhotoRepository;

beforeEach(() => {
  repository = new FilePhotoRepository();
});

describe('FilePhotoRepository', () => {
  test('Should save a photo', async () => {
    const id = uuid();
    const description = 'some-description';
    const photoUrl = 'https://api.unsplash.com/example';

    const expectedPhoto = new Photo({
      id: new PhotoId(id),
      description: new PhotoDescription(description),
      photoUrl: new PhotoUrl(photoUrl)
    });

    await repository.save(expectedPhoto);

    const photo = await repository.search(id);
    expect(photo).toEqual(expectedPhoto);
  });
  test('Should search photos', async () => {
    const photos = await repository.searchAll();
    expect(photos).toBeInstanceOf(Array);
  });
});
