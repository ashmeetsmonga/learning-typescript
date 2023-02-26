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
