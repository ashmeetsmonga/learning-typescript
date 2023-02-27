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
