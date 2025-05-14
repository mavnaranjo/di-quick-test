import container from './bootstrap';

import { AServiceId } from './a.service';
import { BServiceId } from './b.service';
import { CServiceId } from './c.service';
import { DServiceId } from './d.service';

const aService = container.get(AServiceId);
const bService = container.get(BServiceId);
const cService = container.get(CServiceId);
const dService = container.get(DServiceId);

console.log(aService.hi());
console.log(bService.hi());
console.log(cService.hi());
console.log(dService.hi());
