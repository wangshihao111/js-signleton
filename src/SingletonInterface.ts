export interface SingletonInterface {
  singleton: <T = any>(name: string, value: T) => T;
}
