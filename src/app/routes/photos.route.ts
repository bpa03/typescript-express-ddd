import type * as express from 'express';
import { type PhotoPostController } from '../controllers/PhotoPostController';
import { type PhotoGetController } from '../controllers/PhotoGetController';
import { container } from '../dependency-injection';

export class PhotoRoutesRegister {
  static register (router: express.Router): void {
    const photoPostController = container.get<PhotoPostController>('App.Backend.controllers.PhotoPostController');
    const photoGetController = container.get<PhotoGetController>('App.Backend.controllers.PhotoGetController');

    router.post('/photo', photoPostController.run.bind(photoPostController));
    router.get('/photo', photoGetController.run.bind(photoGetController));
  };
}
