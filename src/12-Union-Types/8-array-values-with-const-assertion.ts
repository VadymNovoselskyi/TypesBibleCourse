const languages = ["java", "c", "go"] as const;

type JavaOrGo = (typeof languages)[0 | 2]; // "java" | "go"
type Languages = (typeof languages)[number]; // "java" | "c" | "go"
