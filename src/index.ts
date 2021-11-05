export interface SingletonInterface {
  singleton: <T = any>(name: string, value: T) => T;
}

export class Singleton implements SingletonInterface {
  private pool: Map<any, any>;

  constructor() {
    this.pool = new Map();
  }

  public singleton(key: string, value: any) {
    let singletonValue = this.pool.get(key);
    if (!singletonValue) {
      singletonValue = value;
      this.pool.set(key, singletonValue);
    }
    return singletonValue;
  }
}

export class GlobalSingleton implements SingletonInterface {
  private pool: Record<string, any>;

  constructor() {
    const g: any =
      typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : globalThis;
    if (g.__jsSingleton__) {
      this.pool = g.__jsSingleton__;
    } else {
      this.pool = g.__jsSingleton__ = {};
    }
  }
  singleton(key: string, value: any) {
    let singletonValue = this.pool[key];
    if (!singletonValue) {
      singletonValue = this.pool[key] = value;
    }
    return singletonValue;
  }
}

const singleton = new Singleton();

const globalSingleton = new GlobalSingleton();

export function createSingleton<T = any>(key: string, value: T): T {
  return singleton.singleton(key, value);
}

export function createGlobalSingleton<T = any>(key: string, value: T): T {
  return globalSingleton.singleton(key, value);
}

export default createGlobalSingleton;
