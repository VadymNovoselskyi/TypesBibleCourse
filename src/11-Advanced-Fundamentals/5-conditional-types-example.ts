interface Admin {
  level: number;
  write_permission: boolean;
}

interface User {
  username: string;
  email: string;
}

type Session<T extends "admin" | "student"> = {
  props: T extends "admin" ? Admin : User;
};

let session1: Normalize<Session<"admin">>;
// @ts-expect-error
let session2: Session<"user">;
