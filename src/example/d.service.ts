import { InjectionKey } from "../ioc-container";

export const DServiceId: InjectionKey<DService> = Symbol();

export interface DService {
    hi(): string
}

export class DServiceImpl implements DService {
    hi(): string {
        return `Hi, I´m nobody`;
    }
}