type TemplateLiteralKeys = `${"id" | "title" | "author"}`;

type ObjWithKeys = Record<Uppercase<TemplateLiteralKeys>, string>; //{ID: string, TITLE: string, AUTHOR: string}
