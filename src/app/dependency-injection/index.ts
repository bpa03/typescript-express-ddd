import { ContainerBuilder } from 'node-dependency-injection';
import { regiserAppControllers } from './app/application';
import { registerPhotoModules } from './Photos/application';
import { registerSharedModules } from './Shared/application';

const container = new ContainerBuilder();
registerSharedModules(container);
registerPhotoModules(container);
regiserAppControllers(container);

export { container };
