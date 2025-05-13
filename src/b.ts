import { A } from "./a";

export const BId = Symbol();

export interface B {
    hi(): string
}

export class BImpl implements B {
    private a: A;
    private age: number;

    constructor(a: A, age: number) {
        this.a = a;

        this.age = age;
    }

    hi(): string {
        return `${ this.a.hi() }, I´m ${ this.age } years old`;
    }
}