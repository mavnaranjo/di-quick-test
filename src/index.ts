import container from './bootstrap';

import { A, AId } from './a';
import { B, BId } from './b';
import { C, CId } from './c';

const a = container.get<A>(AId);
const b = container.get<B>(BId);
const c = container.get<C>(CId);

console.log(a.hi());
console.log(b.hi());
console.log(c.hi());
