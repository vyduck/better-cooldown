# better-cooldown
A simple cooldown checker.

# Latest version introduces breaking changes.
## Usage
Use `createCooldown()` function to create a cooldown tracker. 

Then use the `tick()` function to know how much time (in ms) until the function can be used next. If the function can be used at the time of using tick function, it will return `0`.

`Note`: `limit` is the amount of times a cooldown can be used in specified `period`.

`Note`: `period` must be in seconds
## Basic Example

```js
let limit = 2;
let period = 15; // default: 60

let commandCooldown = createCooldown(limit, period);
// In this example, cooldown is 2 times in 15 seconds.

console.log(commandCooldown.tick());
// expected output: 0

console.log(commandCooldown.tick());
// expected output: 0

console.log(commandCooldown.tick());
// expected output: approx. 14990

// 10 seconds after initial tick
console.log(commandCooldown.tick());
// expected output: approx. 4990

// 15 seconds after initial tick
console.log(commandCooldown.tick());
// expected output: 0
```


## Detailed
The object returned by `createCooldown()` is of type
```js
{
    limit: number,
    period: number,
    strikes: number[],
    tick: Function,
}
```

Here, `strikes` attribute contains all the timestamps of when the `tick()` function was used.