/*
 * Primitives
 */
let language: string = "TypeScript";
// String is from
let jsLanguage: String = "JavaScript";
// strictNullChecks off
// jsLanguage = undefined
// jsLanguage = null

let specialNumber: number;
specialNumber = 1024;

let areYouOK: boolean = false;
const iAmOK: Boolean = Boolean(1);

console.log(language, "is a String");
console.log(specialNumber, "is a Number");
console.log(areYouOK, "is a Boolean value");

let u: undefined = undefined;
let n: null = null;

/*
 * Arrays
 */
let fibonacci: number[] = [1, 1, 2, 3, 5];
let channel: string[] = ["voice", "sms", "email"];

/*
 * Any
 */
let isChrisTheMostBeautifulLady: any;
isChrisTheMostBeautifulLady = "yes";
isChrisTheMostBeautifulLady = true;
isChrisTheMostBeautifulLady = 6666666;

//Type Annotation and Inference
let something: any; // it is the same as `let something`
something = {};

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

// something.test();
// something();
something.value = 100;
something = "hello";
const x: number = something;

const memory: any[] = ["string", 1, true, null, undefined, {}];

/*
 * Union Types
 */
let isChrisTheSmartestPerson: string | boolean;
isChrisTheSmartestPerson = true;
isChrisTheSmartestPerson = "definitely";
isChrisTheSmartestPerson = "absolutely";
isChrisTheSmartestPerson = "couldn’t agree more";

function printId(id: number | string) {
  // remember: check the type
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
  // warning
  //id.toUpperCase();
  id.toString(); // both String and Number have toString function
}

/*
 * Functions
 */
let greet = function (name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
  return undefined;
};

// Would be a runtime error if executed!
// greet(42);
// greet("Robin", "Chris");

// Automatically inference
// function greet(name: string): void {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }
// let greet: (name: string) => void = function (name: string): void {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// };

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

let myGreet: (name: string) => void = function (name: string): void {};

let sum = function (a: number, b: number = 0, ...rest: any[]): number {
  let result = a + b;
  rest.forEach((item) => {
    if (typeof item === "number") result += item;
  });
  return result;
};

// Overload
// function reverse(x: number): number;
// function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

/*
 * Object
 */
let person: object = {};
// Optional Properties
let printPerson = function (person: { name: string; age?: number }): void {
  console.log("Name:" + person.name);
  if (person.age !== undefined) {
    // !!! Check for undefined before using it
    console.log("Age:" + person?.age);
  }

  // Non-null Assertion Operator (Postfix!)
  // let temp:number = person.age!
  // console.log("Age:" + temp);
};

/*
 * Type Aliases
 */
type Person = {
  name: string;
  age?: number | string;
};

// Exactly the same as the earlier example
printPerson = function (person: Person) {
  console.log("Name:" + person.name + "/n");
  if (person.age !== undefined) {
    console.log("Age:" + person?.age);
  }
};

/*
 * Interfaces
 */
interface Point {
  // in some language，they prefer naming interface with ‘I’ prefix
  x: number;
  y: number;
}

const originPoint: Point = { x: 0, y: 0 };

// Extending an interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

let polarBear: Bear = { name: "Polar bear", honey: false };

// Extending a type via intersections
type Plant = {
  name: string;
};

type Tree = Plant & {
  flower: boolean;
};

let pine: Tree = { name: "Polar bear", flower: false };

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Adding new fields to an existing interface
// interface SmartPhone {
//   brand: string;
// }

// interface SmartPhone {
//   cpu: string;
// }

// let iphone: SmartPhone = { brand: "Apple", cpu: "ARM" };

// A type cannot be changed after being created
// type Computer = {
//   brand: string;
// };

// type Computer = {
//   cpu: string;
// };

// Interface for functions
interface ISearch {
  (source: string, subString: string): boolean;
}

let mySearch: ISearch = function (source, subString) {
  return source.search(subString) !== -1;
};

// readonly property
interface Clothes {
  color?: string;
  size: string;
  readonly price: number;
}

let myClothes: Clothes = {
  size: "XL",
  price: 98
};

// myClothes.price = 100  //error

// Index Signatures
interface Fruit {
  name: string;
  class: number;
  [propName: string]: any;
}

// The declared property name might conflict with variable propName
// interface Fruit {
//   name: string;
//   class: number;
//   [propName: string]: boolean;
// }

const apple: Fruit = {
  name: "apple",
  class: 1,
  color: "red",
  price: 5
};

console.log(apple.class);

/*
 * Type Assertion(断言)
 */
const myCanvas = document.getElementsByClassName("App")[0] as HTMLCanvasElement;
// myCanvas.style.backgroundColor = "#358EF1";

// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:
const root = <HTMLCanvasElement>document.getElementById("main_canvas");

/*
 * Literal Types
 */
function renderNode(s: string, alignment: "left" | "right" | "center") {
  // ...
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

/*
 * Enum
 */
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true

// 从第一个数字赋值，往后依次累加
enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr
}

// var Months;
// (function (Months) {
//   Months[Months['Jan'] = 1] = 'Jan'
//   Months[Months['Feb'] = 2] = 'Feb'
//   Months[Months['Mar'] = 3] = 'Mar'
//   Months[Months['Apr'] = 4] = 'Apr'
// })(Months || (Months = {}))

// {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', Jan: 1, Feb: 2, Mar: 3, Apr: 4}

console.log(Months.Jan === 1); // true
console.log(Months.Feb === 2); // true
console.log(Months.Mar === 3); // true
console.log(Months.Apr === 4); // true

// enum Direction { Up='up', Down, Left, Right } // error

/*
 * Remove warning
 */
Array([
  apple,
  myClothes,
  1 || myGreet(""),
  1 || mySearch("", ""),
  1 || compare("", ""),
  1 || renderNode("", "left"),
  myCanvas,
  root,
  1 || reverse(0),
  1 || reverse(""),
  pine,
  polarBear,
  originPoint,
  1 || printId(language),
  1 || printPerson({ name: language }),
  isChrisTheSmartestPerson,
  person,
  1 || sum(specialNumber, specialNumber),
  1 || greet(language),
  x,
  something,
  memory,
  isChrisTheMostBeautifulLady,
  jsLanguage,
  jsLanguage,
  iAmOK,
  u,
  n,
  fibonacci,
  channel
]);
