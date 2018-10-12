/*
Output numbers from 1 to x.

If the number is divisible by 3, replace it with “Fizz”.
If it is divisible by 5, replace it with “Buzz”.
If it is divisible by 3 and 5 replace it with “FizzBuzz”.
*/
const log = console.log;

// # Step 1 -> Add way to change default range
// # Step 2.1 -> Add 3rd rule with number 7 and word "Foo"
// # Step 2.2 -> Add 4th rule with number 11 and word "Boo"
// # Step 3.1 -> Add new type of rule "less than 16" and word "Small"
// # Step 3.2 -> Add new type of rule "more than 95" and word "Big"

const divideBy3 = num => (num % 3 === 0 ? "Fizz" : "");
const divideBy5 = num => (num % 5 === 0 ? "Buzz" : "");

function fizzBuzz({
  start = 1,
  end = 100,
  extraRules = [],
  starterRules = []
}) {
  const ruleSet = [...starterRules, divideBy3, divideBy5, ...extraRules];

  const elements = [];
  for (let i = start; i <= end; ++i) {
    let string = "";

    if (ruleSet.some(rule => rule(i)))
      elements.push(ruleSet.reduce((prev, rule) => prev + rule(i), ""));
    else elements.push(i);
  }
  log(elements);
}

fizzBuzz({
  start: 1,
  end: 20,
  extraRules: [
    num => (num % 7 === 0 ? "Foo" : ""),
    num => (num % 11 === 0 ? "Boo" : "")
  ],
  starterRules: [
    num => (num < 16 ? "Small" : ""),
    num => (num > 95 ? "Big" : "")
  ]
});
