import { type ContainerBuilder, Reference } from 'node-dependency-injection';
import { PrismaPhotoRepository } from '../../../Context/Photos/infrastructure/persitence/PrismaPhotoRepository';
import { PhotoCreator } from '../../../Context/Photos/application/PhotoCreator';
import { PhotoFinder } from '../../../Context/Photos/application/PhotoFinder';

export const registerPhotoModules = (container: ContainerBuilder): void => {
  container.register('App.Photo.Domain.PhotoRepository', PrismaPhotoRepository).addArgument(new Reference('App.Shared.ConnectionManager'));
  container.register('App.Photo.Application.PhotoFinder', PhotoFinder).addArgument(new Reference('App.Photo.Domain.PhotoRepository'));
  container.register('App.Photo.Application.PhotoCreator', PhotoCreator).addArgument(new Reference('App.Photo.Domain.PhotoRepository'));
};
