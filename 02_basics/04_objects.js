// const tinderUser = new Object() //<-0singleton object
const tinderUser = {} // <--non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Atharva",
            lastname: "Chougale"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);

