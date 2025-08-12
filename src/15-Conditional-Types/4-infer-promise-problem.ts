export async function fakeFetch() {
  return {
    id: "test_id",
  };
}

async function getFakeData() {
  const data = await fakeFetch();
  return {
    result: {
      data,
    },
  };
}

type InferDataFromResult<T> = T extends (...params: any) => Promise<{ result: infer R }>
  ? R
  : never;

type test = InferDataFromResult<typeof getFakeData>;
/*
   {
      data: {
        id: string;
    }
*/
