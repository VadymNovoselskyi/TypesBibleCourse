import { Equal, Expect } from "..";

export async function fetchServerVersion(): Promise<number> {
  const response = await fetch("https://api.example.com/v");
  return response.json();
}

const example = async () => {
  const version = await fetchServerVersion();

  type test = Expect<Equal<typeof version, number>>;
};
