/*
 * Tuple
 */
const list: [string, number] = ["Sherlock", 1887]; // ok
// const list1: [string, number] = [1887, 'Sherlock']  // error

// 一旦定义，不改变长度
const list2: [number, ...string[]] = [10, "a", "b", "c"];
const list3: [string, ...number[]] = ["a", 1, 2, 3];

type myTuple = [number, string?, boolean?];
let list4: myTuple = [10, "Sherlock", true];
list4 = [10, "Sherlock"];
list4 = [10];
// list4 = [10, true]; //error

function testTuple(...args: [number, string, boolean]): void {}

/*
 * Never and Unknown
 */
function error(message: string): never {
  throw new Error(message);
}

// unknown is very similar to any, but unknown is recommended because it's safer
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK

// let value3: boolean = value   // Error
// let value4: number = value    // Error
// let value5: string = value    // Error
// let value6: object = value    // Error
// let value7: any[] = value     // Error

let value3: boolean = value as boolean;

/*
 * Generics
 */
function identity<Type>(arg: Type): Type {
  return arg;
}

console.log(identity<string>("Hello World of Generics"));
console.log(identity(0));

// Generics array
function createArray<T>(length: number, value: T): Array<T> {
  // T[]
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, "x"); // ['x', 'x', 'x']

function defaultType<T = string>(arg: T): void {}

// Generic Types
let myIdentity: <Type>(arg: Type) => Type = identity;
// let myIdentity: { <Type>(arg: Type): Type } = identity;

// Generic Interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
// interface GenericIdentityFn<Type> {
//   (arg: Type): Type;
// }

let myIdentity1: GenericIdentityFn = identity;

/*
 * Remove warning
 */
Array([
  1 || myIdentity1(""),
  1 || myIdentity(""),
  1 || defaultType(""),
  value1,
  value2,
  value3,
  1 || error(""),
  1 || testTuple(0, "", true),
  list4,
  list3,
  list2,
  list
]);
