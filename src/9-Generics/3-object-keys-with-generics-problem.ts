export function getObjKeys<T extends {}>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

const test = getObjKeys({
  key1: "value 1",
  kay2: 123,
});

// ("key1" | "kay2")[]
