import type * as express from 'express';
import { type StatusGetController } from '../controllers/StatusGetController';
import { container } from '../dependency-injection';

export class StatusRoutesRegister {
  static register (router: express.Router): void {
    const statusGetController = container.get<StatusGetController>('App.Backend.controllers.StatusGetController');

    router.get('/status', statusGetController.run.bind(statusGetController));
  };
}
