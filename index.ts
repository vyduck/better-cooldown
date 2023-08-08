interface cooldown {
    limit: number;      // Number of times a function can be used per minute
    strikes: number[];  // Timestamps of times a function has been used
    tick: Function;     // Checks if a function is useable at this moment
}

export function createCooldown(limitPerMin: number): cooldown {
    let tracker: cooldown = {
        limit: limitPerMin,
        strikes: [],
        tick: () => {
            for (let strike in tracker.strikes) {
                if (
                    (Date.now() - tracker.strikes[strike]) > 10000
                ) tracker.strikes.splice(Number(strike), Number(strike));
            };

            if (tracker.strikes.length + 1 > tracker.limit) return false;
            else {
                tracker.strikes.push(Date.now());
                return true;
            };
        }
    };
    return tracker;
};


const duck = createCooldown(2);
console.log(duck.tick(), duck.tick(), duck.tick());