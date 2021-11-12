export class BaseSingleton {
  constructor(private pool: Map<any, any>) {}

  public singleton(key: string, value: any) {
    let singletonValue = this.pool.get(key);
    if (!singletonValue) {
      singletonValue = value;
      this.pool.set(key, singletonValue);
    }
    return singletonValue;
  }

  public overrideSingleton(key: string, value: any) {
    this.pool.set(key, value);
  }
}

export class Singleton extends BaseSingleton {
  constructor() {
    super(new Map());
  }
}

export class GlobalSingleton extends BaseSingleton {
  constructor() {
    let pool: Map<any, any>;
    const g: any =
      typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : globalThis;
    if (g.__jsSingleton__) {
      pool = g.__jsSingleton__;
    } else {
      pool = g.__jsSingleton__ = new Map();
    }
    super(pool);
  }
}

const singleton = new Singleton();

const globalSingleton = new GlobalSingleton();

export function createSingleton<T = any>(key: string, value: T): T {
  return singleton.singleton(key, value);
}

export function overrideSingleton(key: string, value: any): void {
  singleton.overrideSingleton(key, value);
}

export function createGlobalSingleton<T = any>(key: string, value: T): T {
  return globalSingleton.singleton(key, value);
}

export function overrideGlobalSingleton(key: string, value: any): void {
  globalSingleton.overrideSingleton(key, value);
}

export default createGlobalSingleton;
