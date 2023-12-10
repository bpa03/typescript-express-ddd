import { type Photo } from './Photo';

export interface PhotoRepository {
  save: (photo: Photo) => Promise<void>
  searchAll: () => Promise<Photo[]>
}
