import {Building} from "../Building";
import {Production} from "../Production";

export class Castle extends Building {
    constructor(productionFinishCallback: (production: Production) => void) {
        super(productionFinishCallback);
    }

    readonly availableProductions: Production[] = [];

}