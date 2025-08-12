//Fix this error.
type AddUnderline<T extends string> = `${T}_`;

type Test1 = AddUnderline<"test">;
type Test2 = AddUnderline<"">;

//Should error.
// @ts-expect-error
type Test3 = AddUnderline<23>;
// @ts-expect-error
type Test4 = AddUnderline<false>;
