var a = "abc"; // global
function fun() {
  console.log(a); // no error will be given
  //   console.log(c);  throws an error its in tempral dead zone
  var a = "abc"; // scope of fun
  let c = "xyz"; // content will be accessed only post declaration and inside the scope
  if (c == "xyz") {
    let h = "120"; // can be accesed only inside the if scope
    var y = "yeah"; // can be accesed inside the fun as it takes its scope
    console.log(h, c);
  }
  console.log(a, c, y);
}
fun();
console.log(a);

// var allows variable redclaration but let dosen't
// const also have a tdz

const obj = { x: 10 };
obj.x = 11; // can update no problem
obj.y = 99; // can also add new values
// obj = {annything} this is not allowed but we change its values inside
console.log(obj);

const l = 10;
l.val = 11; // its value will not be changed although will not throw an error 
            //auto boxing is going on there it will momentarly treat l as object
console.log(l);
