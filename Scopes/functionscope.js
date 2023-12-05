function fun() {
    console.log(a); // a is accessible here but will give us undefined
    var a = 5;
}

fun();

console.log(a); // now this will throw an error as a is not accessible outside the scope

function fu() {
    console.log(b); // b is not accesible here
    let b = 5;
}