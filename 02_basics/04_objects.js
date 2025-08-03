

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

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj = Object.assign({},obj1, obj2)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email:"atha@gamil.com"
    },
    {
        id: 1,
        email:"atha@gamil.com"
    },
    {
        id: 1,
        email:"atha@gamil.com"
    },
    {
        id: 1,
        email:"atha@gamil.com"
    },
    {
        id: 1,
        email:"atha@gamil.com"
    },
    {
        id: 1,
        email:"atha@gamil.com"
    },
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor
const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company}) => {           -
                                     //       |
// }                                          |<----- Destructuring
// navbar(company="Atharva")                 -
                
// -----------------------------API-----------------------------\\

// {
//     name: "Atharva",
//     coursename: "Js",
//     price: "Free"
// }

