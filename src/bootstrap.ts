import { IocContainer } from "./container";

import { A, AImpl, AId } from "./a";
import { B, BImpl, BId } from "./b";
import { C, CImpl, CId } from "./c";

const container = new IocContainer();

container.bindSingleton<A, typeof AImpl>(AId, AImpl, ['Miguel']);
container.bindSingleton<B, typeof BImpl>(BId, BImpl, [container.get<A>(AId), 32]);
container.bindSingleton<C, typeof CImpl>(CId, CImpl, [BId, 'male']);

export default container;