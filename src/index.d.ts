export interface cooldown {
    limit: number;
    period: number;
    strikes: number[];
    tick: Function;
}
export declare function createCooldown(limitPerMin: number, period?: number): cooldown;
