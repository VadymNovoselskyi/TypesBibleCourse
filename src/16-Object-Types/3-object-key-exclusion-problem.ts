export interface Obj {
  first_name: string;
  last_name: string;
  school_Name: string;
  age: number;
  email: string;
}

type KeysWithName<T> = {
  [K in keyof T as K extends `${string}_${"name" | "Name"}` ? K : never]: T[K];
};

type test = KeysWithName<Obj>;
/*
{
    first_name: string;
    last_name: string;
    school_Name: string;
}
*/
