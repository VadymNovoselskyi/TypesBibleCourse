import { Equal, Expect } from "..";

type DotToUnderscores<T extends string> = Combine<Separate<T, ".">, "_">;
// type DotToUnderscores<Str> = Str extends `${infer Head}.${infer Tail}`
//   ? `${Head}_${DotToUnderscores<Tail>}`
//   : Str;

type Separate<
  Str extends string,
  Separator extends string
> = Str extends `${infer Head}${Separator}${infer Tail}`
  ? [Head, ...Separate<Tail, Separator>]
  : [Str];

type Combine<List extends string[], Separator extends string> = List extends [
  infer Head extends string,
  ...infer Tail extends [string, ...string[]]
]
  ? `${Head}${Separator}${Combine<Tail, Separator>}`
  : List[0];

type res1 = Separate<"a.b.c", ".">;
type test1 = Expect<Equal<res1, ["a", "b", "c"]>>;

type res2 = Combine<["a", "b", "c"], "_">;
type test2 = Expect<Equal<res2, "a_b_c">>;

type res3 = DotToUnderscores<"hello">;
type test3 = Expect<Equal<res3, "hello">>;

type res4 = DotToUnderscores<"user.name">;
type test4 = Expect<Equal<res4, "user_name">>;

type res5 = DotToUnderscores<"learning.is.fun">;
type test5 = Expect<Equal<res5, "learning_is_fun">>;
