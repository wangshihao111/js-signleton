import { SingletonInterface } from "./SingletonInterface";

export class GlobalSingleton implements SingletonInterface {
  private pool: Record<string, any>;

  constructor() {
    const g: any =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
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
