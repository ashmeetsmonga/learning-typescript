"use strict";
let myName;
let meaningOfLife;
let isLoading;
let album;
myName = "Ash";
meaningOfLife = 42;
isLoading = true;
album = 5150;
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
//Lesson 3
let test = [];
let bands = [];
bands.push("Van Helsing");
let numbers = [];
const myTuple = ["Ash", 42, true];
let myObj;
myObj = [];
myObj = {};
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"],
};
let evh2 = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
//Not possible with interface
//Literal Types
let myName1;
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((acc, val) => acc + val);
};
const createErrror = (msg) => {
    throw new Error(msg);
};
//use of never type
const numberOrString = (a) => {
    if (typeof a === "string")
        return "string";
    if (typeof a === "number")
        return "number";
    return createErrror("This would never happen");
};
let a = 10;
let b = a;
let c = a;
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
const myVal = addOrConcat(2, 3, "concat");
//double casting or forced casting
10;
//The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("img");
// img.src;
// myImg.src;
//Lesson 6 Class
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.getAge = () => {
            return this.age;
        };
    }
}
const Dave = new Coder("Dave", "Punk Rock", 25, "Python");
console.log(Dave);
console.log(Dave.getAge());
//console.log(Dave.age) would show error but compile and run successfully
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer; //not necessary
    }
    getComputer() {
        return this.computer;
    }
}
const Amy = new WebDev("Mac", "Amy", "Daft Punk", 25);
console.log(Amy);
console.log(Amy.getComputer());
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Pianist("Page", "Piano");
console.log(Page.play("plays"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jack = new Peeps("Jack");
const Sara = new Peeps("Sara");
const Penny = new Peeps("Penny");
console.log(Peeps.count);
console.log(Penny.id);
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions["Dave"]); // undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
//Lesson 8
const echo = (arg) => arg;
//////////////////////////////////
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
// ///////////////////////////////////
// const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { arg, is: false }
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { arg, is: false }
//     }
//     return { arg, is: !!arg }
// }
// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Dave'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({})) // modified
// console.log(isTrue({ name: 'Dave' }))
// console.log(isTrue([])) // modified
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue(NaN))
// console.log(isTrue(-0))
// ////////////////////////////////////
// interface BoolCheck<T> {
//     value: T,
//     is: boolean,
// }
// const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { value: arg, is: false }
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { value: arg, is: false }
//     }
//     return { value: arg, is: !!arg }
// }
// //////////////////////////////////////
// interface HasID {
//     id: number
// }
// const processUser = <T extends HasID>(user: T): T => {
//     // process the user with logic here
//     return user
// }
// console.log(processUser({ id: 1, name: 'Dave' }))
// //console.log(processUser({ name: 'Dave'}))
// ///////////////////////////////////////
// const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
//     return users.map(user => user[key])
// }
// const usersArray = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
// ]
// console.log(getUsersProperty(usersArray, "email"))
// console.log(getUsersProperty(usersArray, "username"))
// ///////////////////////////////////////
// class StateObject<T> {
//     private data: T
//     constructor(value: T) {
//         this.data = value
//     }
//     get state(): T {
//         return this.data
//     }
//     set state(value: T) {
//         this.data = value
//     }
// }
// const store = new StateObject("John")
// console.log(store.state)
// store.state = "Dave"
// //store.state = 12
// const myState = new StateObject<(string | number | boolean)[]>([15])
// myState.state = ['Dave', 42, true]
// console.log(myState.state)
