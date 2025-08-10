import { Equal, Equalish, Expect } from "..";

/**
 * Implement a `FromEntries` generic, transforming
 * a union of [key, value] entries into an object type.
 */
namespace fromEntries {
  type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
    x: infer I
  ) => void
    ? I
    : never;

  type FromEntries<Entries extends [PropertyKey, any]> = UnionToIntersection<
    Entries extends [infer Key extends string, infer Value] ? { [K in Key]: Value } : never
  > & {};

  type res1 = FromEntries<["a", string]>;
  type test1 = Expect<Equal<res1, { a: string }>>;

  type res2 = FromEntries<["a", string] | ["b", number]>;
  type test2 = Expect<Equalish<res2, { a: string; b: number }>>;

  type res3 = FromEntries<never>;
  type test3 = Expect<Equal<res3, {}>>;
}
