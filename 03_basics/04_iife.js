//Immediately invoked function Expression (IIFE)
(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

//IIFE is used to remove global scope pollution caused by global scope variables or declarations done in gobal scope.

( (name) => {
    console.log(`DB connected 2 ${name}`);
})('atharva')  