import {Production} from "../Production";

export class Vill extends Production {

    constructor() {
        super();
    }

    get cost(): Cost {
        return {
            food: 50,
            wood: 0,
            gold: 0,
            stone: 0,
            time: 25
        };
    }

}