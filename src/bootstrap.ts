import { IocContainer } from "./ioc-container";

import { AService, AServiceImpl, AServiceId } from "./a.service";
import { BService, BServiceImpl, BServiceId } from "./b.service";
import { CService, CServiceImpl, CServiceId } from "./c.service";

const container = new IocContainer();

// Constructor parameters are typed
container.bindSingleton<AService, typeof AServiceImpl>(AServiceId, AServiceImpl, ['Miguel']);
// Replace dependencies in constructor with its Symbol, so the library resolves and injects them
container.bindSingleton<BService, typeof BServiceImpl>(BServiceId, BServiceImpl, [AServiceId, 32]);
container.bindSingleton<CService, typeof CServiceImpl>(CServiceId, CServiceImpl, [BServiceId, 'male']);

export default container;