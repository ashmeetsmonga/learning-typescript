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

// img.src;
// myImg.src;

//Lesson 6 Class
class Coder {
	secondLang!: string;

	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "Typescript"
	) {}

	public getAge = () => {
		return this.age;
	};
}

const Dave = new Coder("Dave", "Punk Rock", 25, "Python");
console.log(Dave);
console.log(Dave.getAge());
//console.log(Dave.age) would show error but compile and run successfully

class WebDev extends Coder {
	constructor(public computer: string, name: string, music: string, age: number) {
		super(name, music, age);
		this.computer = computer; //not necessary
	}
	public getComputer() {
		return this.computer;
	}
}

const Amy = new WebDev("Mac", "Amy", "Daft Punk", 25);
console.log(Amy);
console.log(Amy.getComputer());

interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Pianist implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}

	public play(action: string) {
		return `${this.name} ${action} the ${this.instrument}`;
	}
}

const Page = new Pianist("Page", "Piano");
console.log(Page.play("plays"));

class Peeps {
	static count: number = 0;

	static getCount(): number {
		return Peeps.count;
	}

	public id: number;
	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const Jack = new Peeps("Jack");
const Sara = new Peeps("Sara");
const Penny = new Peeps("Penny");

console.log(Peeps.count);
console.log(Penny.id);

//Lesson 7 Index signatures
// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
	readonly [index: string]: number;
	Pizza: number;
	Books: number;
	Job: number;
}

const todaysTransactions: TransactionObj = {
	Pizza: -10,
	Books: -5,
	Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
	let total = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

console.log(todaysNet(todaysTransactions));

//todaysTransactions.Pizza = 40

console.log(todaysTransactions["Dave"]); // undefined

///////////////////////////////////

interface Student {
	//[key: string]: string | number | number[] | undefined
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: "Doug",
	GPA: 3.5,
	classes: [100, 200],
};

// console.log(student.test)

for (const key in student) {
	console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
	console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
	salary: 500,
	bonus: 100,
	sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
	console.log(monthlyIncomes[revenue as keyof Incomes]);
}
