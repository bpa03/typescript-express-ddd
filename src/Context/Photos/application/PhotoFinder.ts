import { type PhotoRepository } from '../domain/PhotoRepository';
import { PhotoFinderResponse } from './PhotoFinderResponse';

export class PhotoFinder {
  constructor (private readonly repository: PhotoRepository) {}

  async exec (): Promise<PhotoFinderResponse> {
    const photos = await this.repository.searchAll();

    return new PhotoFinderResponse(photos);
  }
}
