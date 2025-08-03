const user = {
    username: "Atharva",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //<---current context
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "Atharva"
//     console.log(this.username);
// }
// chai()

// const  chai = function() {
//     let username = "Atharva"
//     console.log(this.username);
// }
// chai()


const  chai = () => {
    let username = "Atharva"
    console.log(this.username);
}
chai()


//Arrow function () => {}



// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ({username:"Atharva"})

console.log(addTwo(3 , 6))

