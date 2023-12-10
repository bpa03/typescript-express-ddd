import { type PrismaClient } from '@prisma/client';

export abstract class PrismaRepository {
  constructor (private readonly _client: Promise<PrismaClient>) {};

  protected async client (): Promise<PrismaClient> {
    return await this._client;
  }
}
