import { InjectionKey } from "../ioc-container";

export const AServiceId: InjectionKey<AService> = Symbol();

export interface AService {
    hi(): string
}

export class AServiceImpl implements AService {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    hi(): string {
        return `Hi, I´m ${this.name}`;
    }
}