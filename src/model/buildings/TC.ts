import {Building} from "../Building";
import { Production } from "../Production";
import {Vill} from "../productions/Vill";

export class TC extends Building {

    constructor(productionFinishCallback: (production: Production) => void) {
        super(productionFinishCallback);
    }

    get availableProductions() {
        return [new Vill()];
    }

}