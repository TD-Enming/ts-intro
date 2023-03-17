# TypeScript Introduction
----------
![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/120px-Typescript_logo_2020.svg.png)

A Static Type Checker

A Typed Superset of JavaScript

**Statically** typed VS. Dynamic typed

**Strongly** typed VS. Weakly typed

## Why TS

Increase productivity (Maybe)

Reduce software maintenance cost (improve the robustness)

-   自动生成约束文件

## How to use TS

### Basics

-   Primitives(原始数据类型)

`string`, `number`, `boolean` and `null`, `undefined`.

-   Arrays
-   Any
-   Union Types

-   Non-null Assertion Operator

-   Type Annotation(注解) and Inference(推断)
-   Functions
-   Object

-   Optional Properties
-   Non-null Assertion Operator (Postfix!)

-   Type Aliases(别名)
-   Interfaces

Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

Type aliases may not participate [in declaration merging, but interfaces can](https://www.typescriptlang.org/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA).

Using interface until you need to use features from type

-   Type Assertions
-   Standard built-in objects

-   ECMAScript: `Boolean`, `Error`, `Date`, `RegExp`([Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects))
-   DOM & BOM: `Document`, `HTMLElement`, `Event`, `NodeList`

-   Literal Types(字面量类型)
-   Enums

### Advanced

### TS with React