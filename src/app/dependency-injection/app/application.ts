import { type ContainerBuilder, Reference } from 'node-dependency-injection';
import { StatusGetController } from '../../controllers/StatusGetController';
import { PhotoPostController } from '../../controllers/PhotoPostController';
import { PhotoGetController } from '../../controllers/PhotoGetController';

export const regiserAppControllers = (container: ContainerBuilder): void => {
  // Controllers
  container.register('App.Backend.controllers.StatusGetController', StatusGetController);
  container.register('App.Backend.controllers.PhotoPostController', PhotoPostController).addArgument(new Reference('App.Photo.Application.PhotoFinder'));
  container.register('App.Backend.controllers.PhotoGetController', PhotoGetController).addArgument(new Reference('App.Photo.Application.PhotoFinder'));
};
