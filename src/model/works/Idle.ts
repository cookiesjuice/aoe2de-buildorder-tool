import {Work} from "../Work";

export class Idle extends Work {
    get income() {
        return {
            wood: 0,
            food: 0,
            gold: 0,
            stone: 0
        };
    }
}