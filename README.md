# cooldown
A simple cooldown checker.

## Usage
Use `createCooldown()` function to create a cooldown tracker. 

Then use the `tick()` function to know whether or not the function is on cooldown or not.

## Example
`limit` is the amount of times a cooldown can be used in specified `period`.

Note: `period` must be in seconds
```js
let limit = 2;
let period = 15; // default: 60

let commandCooldown = createCooldown(limit, period);
// In this example, cooldown is 2 times in 15 seconds.

console.log(commandCooldown.tick());
// expected output: true

console.log(commandCooldown.tick());
// expected output: true

console.log(commandCooldown.tick());
// expected output: false. 

// After 15 seconds
console.log(commandCooldown.tick());
// expected output: true
```