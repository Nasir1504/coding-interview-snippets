function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Nasir", sayBye);