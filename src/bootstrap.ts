import { IocContainer } from "./ioc-container";

import { A, AImpl, AId } from "./a";
import { B, BImpl, BId } from "./b";
import { C, CImpl, CId } from "./c";

const container = new IocContainer();

// Constructor parameters are typed
container.bindSingleton<A, typeof AImpl>(AId, AImpl, ['Miguel']);
// Replace dependencies in constructor with its Symbol, so the library resolves and injects them
container.bindSingleton<B, typeof BImpl>(BId, BImpl, [AId, 32]);
container.bindSingleton<C, typeof CImpl>(CId, CImpl, [BId, 'male']);

export default container;