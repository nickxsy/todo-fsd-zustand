declare global {
  export type Brand<K, T> = K & { __brand: T };
  export type UniqId = Brand<string, 'UniqId'>;
}

export {};
