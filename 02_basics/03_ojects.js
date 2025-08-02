// singleton
//oject literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Atharva",
    "full name": "Atharva Chougale",
    [mySym]:"myKey1",
    age: 18,
    location: "Pune",
    email: "atharva@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])


JsUser.email = "atharva07@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "atharva@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting);