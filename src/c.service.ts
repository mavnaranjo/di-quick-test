import { InjectionKey } from "./ioc-container";
import { BService } from './b.service';

export const CServiceId: InjectionKey<CService> = Symbol();

export interface CService {
    hi(): string
}

export class CServiceImpl implements CService {
    private bService: BService;
    private gender: string;

    constructor(bService: BService, gender: string) {
        this.bService = bService;

        this.gender = gender;
    }

    hi(): string {
        return `${ this.bService.hi() } and I´m a ${ this.gender }`;
    }
}