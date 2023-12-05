function fun() {        // function declaration
    console.log('fun called');
}

let f = function gun() {  // named function expression
    console.log('gun called');
}

let g = function () {  // anonymous function expression
    console.log('anonymous');
}

(function yeah(a) {
    console.log('geez', a); 
})(); // this is running the previous functional expression and then giving me error 
     // if there are no functional expression before it it works fine]  

(function x(y) {
    console.log('This is an IIFE', y);
})("yash");



// geez();