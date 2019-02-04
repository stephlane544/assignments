var ask = require("readline-sync");

var name = ask.question("What's your first name?   ");
var lastName = ask.question("What's your last name?   ");


console.log(name.toUpperCase());
console.log(name.length);

console.log(name.concat(lastName));

var background = ask.question("Tell me a bit about your self.   ")

console.log("Here's what I remember: " + background.slice(0, background.length/2));

var index = ask.question("What index would you like me to start at to repeat your background back to you?");
console.log(background.slice(index));