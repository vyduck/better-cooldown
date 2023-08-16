"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCooldown = void 0;
function createCooldown(limitPerMin, period = 60) {
    let tracker = {
        limit: limitPerMin,
        period: period * 1000,
        strikes: [],
        tick: () => {
            for (let strike in tracker.strikes) {
                if ((Date.now() - tracker.strikes[strike]) > tracker.period)
                    tracker.strikes = tracker.strikes.splice(Number(strike), Number(strike));
            }
            ;
            if (tracker.strikes.length + 1 > tracker.limit) {
                return tracker.period - (Date.now() - tracker.strikes[tracker.strikes.length - 1]);
            }
            else {
                tracker.strikes.push(Date.now());
                return 0;
            }
            ;
        }
    };
    return tracker;
}
exports.createCooldown = createCooldown;
;
