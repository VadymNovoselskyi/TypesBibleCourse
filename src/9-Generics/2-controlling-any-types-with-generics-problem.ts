export async function getUser<T>(id: number): Promise<T> {
  const user = (await fetch(`"/users"/${id}`).then(response => response.json())) as T;
  return user;
}

/*
  Your job:
  Make the getUser functino accept generic type arguments so the data infers 
  the proper type that is
*/

const myFunc = async () => {
  const data = await getUser<{ id: number; username: string }>(23);
};
