# JavaScript Overview

JavaScript is a **weakly typed language** (dynamically typed). It is:

- **Lightweight**
- **Cross-platform**
- **Single-threaded**

## First-Class Citizens

First-class citizens are entities that can be treated like any other variable in the language.

## Converting Strings to Numbers

Methods such as `Number()`, `parseInt()`, and `parseFloat()` can be used to convert a string to a number in JavaScript.

## Events in JavaScript

An **event** in JavaScript refers to actions or occurrences that happen in the browser, such as user interactions (like clicks or key presses), page loading, or other actions that can trigger specific code execution.

## Closures

A closure in JavaScript is a function that retains access to its outer scope (the lexical scope) even after the outer function has finished executing. This allows the inner function to remember the environment in which it was created. A closure lets a function keep access to its own variables, even after it has finished running.

## History

Mozilla later developed from Netscape.

## Prototyping

JavaScript is **prototype-based**. ECMAScript is the standardized specification that JavaScript is based on, defining the language's syntax, semantics, and core features. It facilitates the addition of new methods and improvements to the language.

## HTTP Requests

A JavaScript library for handling HTTP requests is **Axios**.

## The `this` Keyword

The `this` keyword in JavaScript refers to the context in which a function is executed, which can vary depending on how the function is called. It doesn't strictly define the local scope but rather points to the object that is currently executing the function.

## Function Execution

Functions are executed based on the order they are called, not defined. 

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use functions and variables before they are declared in the code.

### Asynchronous Functions

The `setTimeout` function is asynchronous, so it will execute after the current call stack is clear.

## Callback Functions

A **callback function** is a function that is passed as an argument to another function and is executed after some operation is completed.

## Console Methods

Methods in the Console:

- `.log()`
- `.error()`
- `.warn()`
- `.clear()`
- `.time()` followed by `.timeEnd()`
- `.table()` (where data is in key-value pairs)
- `.count()`
- `.group()` followed by `.groupEnd()`

### CSS Styling in Console Logs

The syntax for adding CSS styling as a parameter to the console logs is to replace `%c` in the logs.

## Symbols

- Symbols are used to create unique identifiers for object properties.
- Symbols are immutable, meaning that once a Symbol is created, it cannot be changed.
- Symbols can be used as object keys.
- While Symbols are unique, they cannot be converted to strings directly and are not limited to the global scope.
- Symbols are not included in the `for...in` loop when iterating over object properties. You would need to use `Object.getOwnPropertySymbols()` to retrieve properties that use Symbols as keys.
- `Object.getOwnPropertySymbols()` is a method that can be used to retrieve all the Symbol properties of an object.
- You don't need to use the `new` keyword when creating a Symbol because `Symbol` is designed to be called as a function rather than a constructor.

## Variable Declarations

### Re-declaration

Attempting to declare a variable that already exists in the same scope behaves differently based on the declaration type.

### Updating

Changing the value of an existing variable without re-declaring it is allowed for `var` and `let`, and partially for `const` if dealing with objects.

### Return Statements

If a function does not have a return statement, it implicitly returns `undefined`. You can use multiple return statements in a single function; however, once one return is executed, the function will exit, and any subsequent return statements will not be executed. If you use the return statement inside a loop, it will exit the function entirely at that point.

You cannot return multiple separate values directly; you can return an array or an object that contains multiple values. The key difference is that return can specify a value to return, while simply reaching the end of a function returns `undefined`.

### Loop Control Statements

- The `continue` statement can be used with labeled loops, allowing you to specify which loop to continue if you have nested loops.
- The `break` statement without a label will only break out of the loop in which it is called, but with a label, it can also exit outer loops.

### Do...While vs While Loop

The main difference between `do...while` and `while` loops is that `do...while` is guaranteed to run at least once, whereas the `while` loop will not run even once if the given condition is not satisfied.

## Property Ownership

Using `hasOwnProperty` allows you to check if the property belongs to the object itself and not to its prototype chain, thus preventing iteration over inherited properties.

## Iteration in JavaScript

### Map vs Object

- `for...of` iterates over values (elements) of an iterable.
- `for...in` iterates over the keys (property names) of an object.

While the `for...of` loop is not directly used to iterate over object properties, you can use it in combination with `Object.keys()`, `Object.values()`, or `Object.entries()` to achieve this.

```javascript
let sum = 0, a = 1;

// Label for outer loop
outerloop: while (true) {
    a = 1; // Reset 'a' to 1 at the start of each iteration of the outer loop

    // Label for inner loop
    innerloop: while (a < 3) {
        sum += a; // Add the current value of 'a' to 'sum'
        if (sum > 12) { // Check if 'sum' exceeds 12
            break outerloop; // If it does, break out of the outer loop
        }
        console.log("sum = " + sum); // Log the current value of 'sum'
        a++; // Increment 'a'
    }
}
```

```javascript
let sum = 0, a = 1;

// Label for outer loop
outerloop: while (sum < 12) {
    a = 1; // Reset 'a' to 1 at the start of each iteration of the outer loop

    // Label for inner loop
    innerloop: while (a < 3) {
        sum += a; // Add the current value of 'a' to 'sum'
        if (a === 2 && sum < 12) {
            continue outerloop; // Skip to the next iteration of the outer loop
        }
        console.log("sum = " + sum + " a = " + a); // Log the current values of 'sum' and 'a'
        a++; // Increment 'a'
    }
}
```

## Operators

- `=` stands for assignment operator
- `==` stands for equality operator
- `===` stands for strict equality operator

### Equality Operators

- **Loose Equality (`==`)**: This operator checks for equality after performing type coercion if necessary. For example:  
  `0 == '0'` evaluates to `true` because `'0'` is converted to a number.

- **Strict Equality (`===`)**: This operator checks for equality without type conversion. For example:  
  `0 === '0'` evaluates to `false` because the types (number vs. string) are different.

The expression `null == undefined` actually evaluates to `true` because both represent the absence of a value.

### Nullish Coalescing Operator

The nullish coalescing operator (`??`) returns the right-hand operand when the left-hand operand is either `null` or `undefined`. Otherwise, it returns the left-hand operand.

## BigInt

A **BigInt** is similar to a Number in some ways; however, it cannot be used with methods of the built-in Math object and cannot be mixed with instances of Number in operations. Operations supported on BigInt are not constant time, making it unsuitable for cryptography.

## Unary Negation

When you apply the unary negation operator (`-`) to an object in JavaScript, the object is first converted to a primitive value. If the object does not provide a meaningful numeric value, it will convert to `NaN` (Not a Number).

## Arrays

Arrays are a special type of object, meaning that every array is also an object. When you create an array, it has access to methods defined on both the Array prototype (like `.push()`, `.pop()`, etc.) and the Object prototype (like `.toString()`, `.hasOwnProperty()`, etc.) due to the prototype chain.

### Array Methods

- `.push()`
- `.pop()`
- `.unshift()`
- `.shift()`
- `.splice()`
- `.slice()` (Extracts portion without altering original)
- `.length`
- `.concat()`
- `.toString()`
- `typeof`
- `.isArray()`
- `instanceof`
- `.reverse()`

```javascript
// Creates array with digit 5 in it
const numbers = [5];

// Creates array with 5 empty items
const numbers = new Array(5);
```

### String Methods

- `.substring()`
- `.toUpperCase()`
- `.toLowerCase()`
- `.indexOf

()`
- `.replace()`
- `.trim()`
- `.split()` (splits string into an array of substrings)

## Timezone Differences

Positive values indicate that your local time is behind UTC, while negative values indicate that your local time is ahead of UTC. The value can vary depending on daylight saving time changes.

## Formatting Numbers

The `toFixed()` method is used to format a number using fixed-point notation, which allows you to specify the number of decimal places. It returns a string representation of the number rounded to the specified number of decimal places.

### Generating Random Integers

You typically use both `Math.random()` and `Math.floor()` to generate a random integer within a specific range, like this:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

## Functions vs. Methods

A function is an independent sequence of statements, whereas a method is associated with an object and is generally referenced by the `this` keyword.

### Object Immutability

To prevent an object from being modified, you can use the `Object.freeze()` method. This method makes an object immutable, meaning you cannot add, remove, or change its properties.

### Atomics

The `Atomics.wait()` method is used to block the current thread until the specified value at a given index of a typed array changes. It’s used for synchronization between threads, allowing a thread to wait for a condition to be met without consuming CPU resources.

## BigInt Arithmetic

While BigInt supports many arithmetic operations, it does not support floating-point division. Division of BigInts results in a truncated integer (i.e., it will drop the decimal part). Cryptographic algorithms need to behave predictably regardless of the input to avoid vulnerabilities.

## Object Operations

When you call the revoke function, it invalidates the Proxy, and any further operations on the Proxy will result in a `TypeError`, as it disables the Proxy, making the target object behave like a normal object.

### Reflect and WeakMaps

- `Reflect.preventExtensions()` is used to prevent new properties from being added to an object. However, it doesn’t prevent updating existing properties or deleting properties.
- **WeakMaps** do not support iteration methods like `forEach`, `map`, or `for...of`, because their keys are weakly referenced and can be garbage collected at any time.

## Function Types

- **Function Declaration**: This defines a function using the `function` keyword followed by the function name (e.g., `function myFunction() { }`). It is hoisted, meaning it can be called before it is defined.
  
- **Function Expression**: This involves creating a function and assigning it to a variable (e.g., `const myFunction = function() { }`). It is not hoisted, so it cannot be called before it is defined.
  
- **Anonymous Functions**: These are functions that do not have a name and are often used inline or as arguments.

### Arrow Functions

Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical scope.

### Return Statement Behavior

In JavaScript, when a return statement is followed by a line break, the interpreter automatically inserts a semicolon after `return`.

## Function Parameters and Arguments

- Function parameters are the variables listed in a function's definition.
- Function arguments are the actual values you pass to the function when you call it.
- Extra arguments in JavaScript functions are ignored; the function will only use the defined parameters.

### Rest Parameters

A **rest parameter** allows you to represent an indefinite number of arguments as an array. It is defined using three dots (`...`) followed by a name in the function definition. The rest parameter needs to be the last parameter.

## Scope of Variables

When `var` is declared inside a function, it is only accessible within that function. Both `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in. When `let` or `const` are declared at the top level of a script, they are not added to the global window object, whereas `var` declarations at the top level are.

## The `bind` Method

When using `bind`, the first argument sets the `this` context. By passing `null`, you indicate that the function does not rely on a specific `this` context. This approach is common when `this` isn't needed or relevant for the function’s execution. So, `null` just acts as a placeholder.
