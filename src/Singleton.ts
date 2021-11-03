import { SingletonInterface } from "./SingletonInterface";

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
