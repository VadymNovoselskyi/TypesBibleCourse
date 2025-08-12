type Arr<T> = [T, ...T[]];

const processArray = (input: Arr<string>) => {};

processArray(["bla"]);
processArray(["bla", "blabla", "blablabla"]);

// @ts-expect-error
processArray([]);
