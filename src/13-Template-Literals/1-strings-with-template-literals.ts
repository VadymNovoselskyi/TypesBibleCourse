type Greeting = `hi${string}`;

const pringGreeting = (greeting: Greeting) => {
  console.log(greeting);
};

//No errors:
pringGreeting("hi, John!");
pringGreeting("hi!");
pringGreeting("hi, everybody");

//This should have errors:
// @ts-expect-error
pringGreeting("hey, dude!");
// @ts-expect-error
pringGreeting("👋");
// @ts-expect-error
pringGreeting("dude, hi!");
