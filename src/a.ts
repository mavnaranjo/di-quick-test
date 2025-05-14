import { InjectionKey } from "./ioc-container";

export const AId: InjectionKey<A> = Symbol();

export interface A {
    hi(): string
}

export class AImpl implements A {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    hi(): string {
        return `Hi, I´m ${this.name}`;
    }
}