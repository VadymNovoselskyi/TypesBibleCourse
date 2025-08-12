const values = {
  UUID: "uuid",
  Int: 23,
  String: "A String.",
  Boolean: false,
} as const;

type ValuesType = typeof values;
type UUIDType = ValuesType["UUID"];
type IntType = ValuesType["Int"];
type StringType = ValuesType["String"];
type BooleanType = ValuesType["Boolean"];
