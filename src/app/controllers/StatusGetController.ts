import { type Request, type Response } from 'express';
import { type Controller } from './Controller';

export class StatusGetController implements Controller {
  async run (req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Hello, World!' });
  };
}
