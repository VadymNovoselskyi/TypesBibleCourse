export type ArrayOnly<T> = T extends any[] ? T : never;

type StringsOrNumbersArray = ArrayOnly<number | string | string[] | number[]>;
// string[] | number[]
