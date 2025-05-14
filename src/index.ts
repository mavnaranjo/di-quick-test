import container from './bootstrap';

import { A, AId } from './a';
import { B, BId } from './b';
import { C, CId } from './c';

const a = container.get(AId);
const b = container.get(BId);
const c = container.get(CId);

console.log(a.hi());
console.log(b.hi());
console.log(c.hi());
