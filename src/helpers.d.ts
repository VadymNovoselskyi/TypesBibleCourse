declare global {
  type Normalize<T> = { [K in keyof T]: T[K] } & {};
  type Merge<T, V> = Omit<T, keyof V> & V;
}

export {};
