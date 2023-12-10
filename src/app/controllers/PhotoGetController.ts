import { type Request, type Response } from 'express';
import httpStatus from 'http-status';
import { type Controller } from './Controller';
import { type PhotoFinder } from '../../Context/Photos/application/PhotoFinder';

export class PhotoGetController implements Controller {
  constructor (private readonly photoFinder: PhotoFinder) {}

  async run (req: Request, res: Response): Promise<void> {
    const { photos } = await this.photoFinder.exec();

    res.status(httpStatus.OK).send({ photos });
  }
}
