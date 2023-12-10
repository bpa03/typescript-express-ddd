import { type Request, type Response } from 'express';
import { v4 as uuid } from 'uuid';
import httpStatus from 'http-status';
import { type Controller } from './Controller';
import { type PhotoCreator } from '../../Context/Photos/application/PhotoCreator';

type PhotoPostRequest = Request<unknown, unknown, {
  description: string
  photoUrl: string
}>;

export class PhotoPostController implements Controller {
  constructor (private readonly photoCreator: PhotoCreator) {}

  async run (req: PhotoPostRequest, res: Response): Promise<void> {
    const photoId = uuid();
    const { description, photoUrl } = req.body;

    const photo = await this.photoCreator.exec({ photoId, description, photoUrl });

    res.status(httpStatus.CREATED).send({ photo });
  }
}
