export type Color = "red" | "green" | "blue";

type Colors = {
  [K in Color]: K;
};

/*
{
    red: "red";
    green: "green";
    blue: "blue";
}
*/
