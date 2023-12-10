import express from 'express';
import type * as http from 'http';
import helmet from 'helmet';
import router from './routes';

export class Server {
  private readonly express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;

  constructor (port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(router);
  }

  async listen (): Promise<void> {
    await new Promise(resolve => {
      const env = this.express.get('env') as string;
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Backend App is running at http://localhost:${this.port} in ${env} mode`);
        console.log('Press CTRL-C to stop\n');
      });
    });
  }

  getHttpServer (): Server['httpServer'] {
    return this.httpServer;
  }

  async stop (): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close(err => {
          if (err !== null) { reject(err); return; }
          resolve();
        });
      }
      resolve();
    });
  }
}
