import { Server } from './server';

export class BackendApp {
  server?: Server;

  async start (): Promise<void> {
    const port = process.env.PORT ?? '5000';
    this.server = new Server(port);

    await this.server.listen();
  }

  get httpServer (): Server['httpServer'] | undefined {
    return this.server?.getHttpServer();
  }

  async stop (): Promise<void> {
    return await this.server?.stop();
  }
}
