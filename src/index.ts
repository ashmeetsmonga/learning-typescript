let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Ash";
meaningOfLife = 42;
isLoading = true;
album = 5150;

const sum = (a: number, b: number) => {
	return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

//Lesson 3
let test = [];
let bands: string[] = [];
bands.push("Van Helsing");
let numbers: (number | string | boolean)[] = [];

const myTuple: [string, number, boolean] = ["Ash", 42, true];

let myObj: object;
myObj = [];
myObj = {};

interface Guitarist {
	name?: string;
	active: boolean;
	albums: (string | number)[];
}

let evh: Guitarist = {
	name: "Eddie",
	active: true,
	albums: [1984, 5150, "OU812"],
};

let evh2: Guitarist = {
	name: "Eddie",
	active: true,
	albums: [1984, 5150, "OU812"],
};

const greetGuitarist = (guitarist: Guitarist) => {
	return `Hello ${guitarist.name?.toUpperCase()}`;
};

//Lesson 4
//Type Aliases
type stringOrNumberArray = (string | number)[];
type Guitarist1 = {
	name?: string;
	active: boolean;
	albums: stringOrNumberArray;
};
//Not possible with interface

//Literal Types
let myName1: "Dave" | "Amy" | "John";

//Functions
const add = (a: number, b: number): number => {
	return a + b;
};

const logMsg = (msg: any): void => {
	console.log(msg);
};

type MathFunction = (a: number, b: number) => number;
interface MathFunctionI {
	(a: number, b: number): number;
}

const subtract: MathFunction = function (a, b) {
	return a - b;
};

const multiply: MathFunction = function (a, b) {
	return a * b;
};

const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== "undefined") return a + b + c;
	return a + b;
};

const sumAll = (a: number, b: number, c: number = 0): number => {
	return a + b + c;
};

//Rest Parameters
const total = (...nums: number[]): number => {
	return nums.reduce((acc, val) => acc + val);
};

const createErrror = (msg: string): never => {
	throw new Error(msg);
};

//use of never type
const numberOrString = (a: string | number): string => {
	if (typeof a === "string") return "string";
	if (typeof a === "number") return "number";
	return createErrror("This would never happen");
};

//Lesson 5 Assertions
type One = string | number;

let a = 10;
let b = a as One;
let c = <One>a;

const addOrConcat = (a: number, b: number, c: "add" | "concat"): string | number => {
	if (c === "add") return a + b;
	return "" + a + b;
};

const myVal: string = addOrConcat(2, 3, "concat") as string;

//double casting or forced casting
10 as unknown as string;

//The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;

img.src;
myImg.src;
