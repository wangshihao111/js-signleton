import { GlobalSingleton } from "./GlobalSingleton";
import { Singleton } from "./Singleton";

const singleton = new Singleton();

const globalSingleton = new GlobalSingleton();

export function createSingleton<T = any>(key: string, value: T): T {
  return singleton.singleton(key, value);
}

export function createGlobalSingleton<T = any>(key: string, value: T): T {
  return globalSingleton.singleton(key, value);
}
