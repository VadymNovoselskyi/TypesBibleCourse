export type GetNameValue<T> = T extends { name: infer N } ? N : never;

type Test = GetNameValue<{ name: "blabla" }>; // "blabla"
type Test2 = GetNameValue<{ name: { key: 123 } }>; // {key: 123}
