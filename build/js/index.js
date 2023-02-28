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
