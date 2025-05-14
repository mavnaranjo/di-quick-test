import container from './bootstrap';

import { AService, AServiceId } from './a.service';
import { BService, BServiceId } from './b.service';
import { CService, CServiceId } from './c.service';

const aService = container.get(AServiceId);
const bService = container.get(BServiceId);
const cService = container.get(CServiceId);

console.log(aService.hi());
console.log(bService.hi());
console.log(cService.hi());
