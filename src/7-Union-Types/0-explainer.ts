// export type UserStatus = {
//   state: string;
//   userData?: { id: number; usernmae: string };
//   errorMsg?: string;
// };

export type UserStatus =
  | { state: "loading" }
  | { state: "loaded"; userData: { id: number; username: string } }
  | { state: "finishied"; errorMsg: string };

type CompletedState = "success" | "failed";
type PendingState = "loading" | "idle";
type State = PendingState | CompletedState;

declare function handleAllStates(state: State): void;
declare function handleCompletedeStates(state: CompletedState): void;

type isNumber<T> = T extends number ? "true" : "false";
type isNumberPrecise<T> = [T] extends [number] ? "true" : "false";

type ResultA = isNumber<100>;
type ResultB = isNumber<"hello">;
type ResultC = isNumber<100 | "hello">;
type ResultCPrecise = isNumberPrecise<100 | "hello">;

// type DashToSpace<T extends string> = T extends `${infer Head}-${infer Tail}`
//   ? `${Head} ${DashToSpace<Tail>}`
//   : T;

type DashToSpace<T extends string> = [T] extends [`${infer Head}-${infer Tail}`]
  ? `${Head} ${DashToSpace<Tail>}`
  : T;

type Resul1 = DashToSpace<"some-text-1-2-3">;
// Goofy ahh type
type Resul2 = DashToSpace<"1-2-3" | "4-5-6">;

type StringVariants<S extends string> = [Lowercase<S>, Uppercase<S>];
type StringVariantsDistributive<S extends string> = S extends any
  ? [Lowercase<S>, Uppercase<S>]
  : never;
type SV1 = StringVariants<"Hi">;
type SV2 = StringVariants<"Hi" | "bye">;
type SV2Distributive = StringVariantsDistributive<"Hi" | "bye">;

type AllKeys<T> = T extends unknown ? keyof T : never;
type ObjA = { x: string; y: number };
type ObjB = { x: string; z: boolean };
type NotFullKeys = keyof (ObjA | ObjB);
type FullKeys = AllKeys<ObjA | ObjB>;

type Notification =
  | { type: "message"; content: string }
  | { type: "friendRequest"; from: string }
  | { type: "alert"; details: string };

type SelectByType<Item, Allowed> = Item extends { type: Allowed } ? Item : never;
type a = SelectByType<Notification, "message" | "alert">;
type b = Extract<Notification, { type: "message" | "alert" }>;

declare function filterItems<
  Items extends readonly Notification[],
  Elem extends { type: string },
  Allowed extends Elem["type"]
>(items: NoInfer<Items> & Elem[], allowed: readonly Allowed[]): SelectByType<Items, Allowed>[];

const allNotifications = [
  { type: "message", content: "abc" },
  { type: "friendRequest", from: "bob" },
  { type: "alert", details: "nun" },
] as const satisfies Notification[];
const selected1 = filterItems(allNotifications, ["message", "alert"]);
const selected2 = filterItems(
  [
    { type: "message", content: "abc" },
    { type: "friendRequest", from: "bob" },
    { type: "alert", details: "nun" },
  ],
  ["message", "alert"]
);
