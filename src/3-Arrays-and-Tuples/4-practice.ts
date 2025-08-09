type NonEmptyArray<T> = [T, ...T[]];

// Type Guard
export function isNonEmpty<A>(arr: A[]): arr is NonEmptyArray<A> {
  return arr.length > 0;
}

function myFunction(arr: string[]) {
  return arr;
}

const myArray0: string[] = [];
const myArray1 = ["1"];

if (isNonEmpty(myArray0)) {
  myFunction(myArray0);
}
if (isNonEmpty(myArray1)) {
  myFunction(myArray1);
}
