export type ProgrammingLanguage = "Java" | "Golang" | "C";

type _JavaOrC<T = ProgrammingLanguage> = T extends "Java" | "C" ? T : never;
type JavaOrC = _JavaOrC;

// "Java" | "C"
