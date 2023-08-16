export interface cooldown {
    limit: number;      // Number of times a function can be used per minute
    period: number;     // The period for which the cooldown works, in seconds. Default is 60s, ie, 1 minute.
    strikes: number[];  // Timestamps of times a function has been used
    tick: Function;     // Checks if a function is useable at this moment
}

export function createCooldown(limitPerMin: number, period: number = 60): cooldown {
    let tracker: cooldown = {
        limit: limitPerMin,
        period: period * 1000,
        strikes: [],
        tick: () => {
            for (let strike in tracker.strikes) {
                if (
                    (Date.now() - tracker.strikes[strike]) > tracker.period
                ) tracker.strikes = tracker.strikes.splice(Number(strike), Number(strike));
            };

            if (tracker.strikes.length + 1 > tracker.limit) {
                return tracker.period - (Date.now() - tracker.strikes[tracker.strikes.length - 1]);
            } else {
                tracker.strikes.push(Date.now());
                return 0;
            };
        }
    };
    return tracker;
};