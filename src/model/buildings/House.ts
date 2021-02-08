import {Building} from "../Building";
import {Production} from "../Production";

export class House extends Building {
    constructor(productionFinishCallback: (production: Production) => void) {
        super(productionFinishCallback);
    }

    get availableProductions() {
        return [];
    }
}