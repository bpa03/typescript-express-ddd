import { Definition, type ContainerBuilder } from 'node-dependency-injection';
import { PrismaClientFactory } from '../../../Context/Shared/infrastructure/persistence/prisma/PrismaClientFactory';

export const registerSharedModules = (container: ContainerBuilder): void => {
  const connectionManagerDefinition = new Definition();
  connectionManagerDefinition.setFactory(PrismaClientFactory, 'createClient');
  container.setDefinition('App.Shared.ConnectionManager', connectionManagerDefinition);
};
