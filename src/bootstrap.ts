import { IocContainer } from "./ioc-container";

import { AService, AServiceImpl, AServiceId } from "./a.service";
import { BService, BServiceImpl, BServiceId } from "./b.service";
import { CService, CServiceImpl, CServiceId } from "./c.service";
import { DService, DServiceImpl, DServiceId } from "./d.service";

const container = new IocContainer();

// Constructor parameters are typed
container.bindSingleton(AServiceId, AServiceImpl, ['Miguel']);
// Replace dependencies in constructor with its Symbol, so the library resolves and injects them
container.bindSingleton(BServiceId, BServiceImpl, [AServiceId, 32]);
container.bindSingleton(CServiceId, CServiceImpl, [BServiceId, 'male']);
// Class without constructor parameters
container.bindSingleton(DServiceId, DServiceImpl, []);

export default container;