//if
// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to but course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

