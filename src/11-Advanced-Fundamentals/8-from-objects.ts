const programmingLanguages = {
  python: {
    name: "Python" as const,
  },
  java: {
    name: "Java" as const,
  },
  golang: {
    name: "Golang" as const,
  },
};

type ProgrammingLanguage = {
  [K in keyof typeof programmingLanguages]: (typeof programmingLanguages)[K]["name"];
}[keyof typeof programmingLanguages];
