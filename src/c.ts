import { InjectionKey } from "./ioc-container";
import { B } from './b';

export const CId: InjectionKey<C> = Symbol();

export interface C {
    hi(): string
}

export class CImpl implements C {
    private b: B;
    private gender: string;

    constructor(b: B, gender: string) {
        this.b = b;

        this.gender = gender;
    }

    hi(): string {
        return `${ this.b.hi() } and I´m a ${ this.gender }`;
    }
}