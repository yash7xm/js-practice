{
  let a = 5;
}
console.log(a); // a is not accesible here as it is defined inside a block

// both of these are same as these are block scopes
{
  var b = 5;
}

if (true) {
  var b = 5;
}

if (false) {
  var b = 5; // here also we can access it outside the block
}

console.log(b); // b is accessible here as var does not have block scope
