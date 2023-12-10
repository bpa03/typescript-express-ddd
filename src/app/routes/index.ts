import { Router } from 'express';
import { PhotoRoutesRegister } from './photos.route';
import { StatusRoutesRegister } from './status.route';

const router = Router();

PhotoRoutesRegister.register(router);
StatusRoutesRegister.register(router);

export default router;
