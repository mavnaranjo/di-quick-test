import { InjectionKey } from "./ioc-container";
import { AService } from "./a.service";

export const BServiceId: InjectionKey<BService> = Symbol();

export interface BService {
    hi(): string
}

export class BServiceImpl implements BService {
    private aService: AService;
    private age: number;

    constructor(a: AService, age: number) {
        this.aService = a;

        this.age = age;
    }

    hi(): string {
        return `${ this.aService.hi() }, I´m ${ this.age } years old`;
    }
}