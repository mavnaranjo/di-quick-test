type AnyConstructor<T> = new (...args: any[]) => T;

type OrSymbol<T extends readonly any[]> = {
  [P in keyof T]: T[P] | Symbol;
};

type ConstructorParametersOrSymbol<I, Class extends AnyConstructor<I>> = OrSymbol<ConstructorParameters<Class>>;

export class IocContainer {
    private readonly instances;

    constructor() {
        this.instances = new Map<Symbol, unknown>();
    }

    private getDependencies<I, Class extends AnyConstructor<I>>(
        args: ConstructorParametersOrSymbol<I, Class>
    ): ConstructorParameters<Class> {
        return args.map((arg) => {
            return typeof arg === 'symbol' ? this.get(arg) : arg;
        }) as ConstructorParameters<Class>;
    }

    bindSingleton<I, Class extends new (...args: any[]) => I> (
        key: Symbol,
        Implementation: Class,
        args: ConstructorParametersOrSymbol<I, Class>
    ) {
        const parameters = this.getDependencies<I, Class>(args);

        const instance = new Implementation(...parameters);
        this.instances.set(key, instance);
    }

    get<I>(key: Symbol): I {
        return this.instances.get(key) as I;
    }
}