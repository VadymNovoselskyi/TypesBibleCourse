import { Equal, Expect } from "..";

/**
 * Type the "extractValue" function to infer its return type
 * from the object's type and the "path" string.
 */
type RemoveComma<T extends string> = T extends `.${infer S}` ? S : T;
type ExtractKey<T extends string> =
  T extends `[${infer Index extends number}]${infer Tail extends string}`
    ? [Index, RemoveComma<Tail>]
    : T extends `${infer Key extends string}.${infer Tail extends string}`
    ? Key extends `[${infer Index extends number}]`
      ? [Index, Tail]
      : [Key, Tail]
    : [T, ""];

type GetValue<T, S extends string> = ExtractKey<S> extends [infer Key, infer Tail extends string]
  ? Key extends infer Index extends number
    ? T extends unknown[]
      ? GetValue<T[Index], Tail>
      : `Key is index ${Index}, but T is not array`
    : Key extends `${infer Key}[${infer Index extends number}]`
    ? Key extends keyof T
      ? T[Key] extends unknown[]
        ? GetValue<T[Key][Index], Tail>
        : `T[Key] exists, but is not an array`
      : `Key is property[index] ${Key}, but T doesnt have that`
    : Key extends ""
    ? T
    : Key extends string
    ? Key extends keyof T
      ? GetValue<T[Key], Tail>
      : `Key is property ${Key}, but T doesnt have that`
    : `Key is not number | property[number] | '' | property`
  : T;

declare function extractValue<T, S extends string>(obj: T, path: S): GetValue<T, S>;

// Example objects and type checks
declare const example1: { a: { b: { c: string } } };
const result1 = extractValue(example1, "a.b.c");
type check1 = Expect<Equal<typeof result1, string>>;

declare const example2: { author: { friends: [{ age: 29 }] } };
const result2 = extractValue(example2, "author.friends[0].age");
type check2 = Expect<Equal<typeof result2, 29>>;

declare const example3: { author: { friends: [undefined, { name: "James" }] } };
const result3 = extractValue(example3, "author.friends[1].name");
type check3 = Expect<Equal<typeof result3, "James">>;

declare const example4: [1, 2, [3, [{ title: "❤️" }]]];
const result4 = extractValue(example4, "[2][1][0].title");
type check4 = Expect<Equal<typeof result4, "❤️">>;

declare const example5: { author: { friends: [null] } };
const result5 = extractValue(example5, "author.friends[0]");
type check5 = Expect<Equal<typeof result5, null>>;
