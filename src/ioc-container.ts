interface InjectionConstraint<T> {};

export type InjectionKey<T> = Symbol & InjectionConstraint<T>;

type AnyConstructor<T> = new (...args: any[]) => T;

type OrSymbol<T extends readonly any[]> = { [P in keyof T]: T[P] | Symbol };

type ConstructorParametersWithSymbols<I, Class extends AnyConstructor<I>> = OrSymbol<ConstructorParameters<Class>>;

export class IocContainer {
    private readonly instances: Map<Symbol, unknown>;

    constructor() {
        this.instances = new Map<Symbol, unknown>();
    }

    private getDependencies<I, C extends AnyConstructor<I>>(
        args: ConstructorParametersWithSymbols<I, C>
    ): ConstructorParameters<C> {
        return args.map((arg) => {
            return typeof arg === 'symbol' ? this.get(arg) : arg;
        }) as ConstructorParameters<C>;
    }

    bindSingleton<I, C extends AnyConstructor<I>> (
        key: InjectionKey<I>,
        Implementation: C,
        args: ConstructorParametersWithSymbols<I, C>
    ) {
        const parameters = this.getDependencies(args);

        const instance = new Implementation(...parameters);
        this.instances.set(key, instance);
    }

    get<I>(key: InjectionKey<I>): I {
        const instance = this.instances.get(key) as I;

        if (!instance) {
            throw new Error('Instance not found');
        }

        return instance;
    }
}