type Post = {
  id: number;
  body: string;
  ts: Date;
};

export function editPost<Key extends keyof Post>(key: Key, value: Post[Key]): Post[Key] {
  if (key === "ts") {
    return new Date() as Post[Key];
  }

  return value;
}
editPost("ts", new Date());
