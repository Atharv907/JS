function sayMyName(){
    console.log("A");
    console.log("t");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("v");
    console.log("a");
}

// sayMyName()

function add(num1,num2){
    let result = num1 + num2;
    return result
    
}

// const result = add(3, 5)
// console.log("Result:", result)

function calCartPrice(...num1){  //<-----rest operator
    return num1
}
// console.log(calCartPrice(200, 400, 500));

const user = {
    username:"atharva",
    age: 22
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

// handleObject(user)
handleObject({
    username:"Aryan",
    age: 16
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[4]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 700, 900, 1100]));