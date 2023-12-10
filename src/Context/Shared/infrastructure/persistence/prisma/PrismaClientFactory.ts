import { PrismaClient } from '@prisma/client';

export class PrismaClientFactory {
  static async createClient (): Promise<PrismaClient> {
    const client = new PrismaClient();
    return client;
  }
}
