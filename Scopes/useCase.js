function fun(x) {
    let i;
    if(x%2==0){
        i = 0;
    }
    else {
        i = 1;
    }
}

// better way 

function gun(x) {
    // console.log(a); // tempral dead zone also exist for const too
    if(x%2==0){
       var i = 0;
    }
    else {
       var i = 1;
    }
    const a = 5;
    console.log(i); // this time it is accesed everywhere 
}

// we can use both but this is just a better way of doing this 
// also can be used in try and catch
// simply if the variable usage is not good outside the block then don't use var use let instead simple

gun(1);