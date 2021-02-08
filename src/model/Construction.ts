import {Building} from "./Building";
import {checkEqual, nop} from "../utils";
import {World} from "./World";
import {Production} from "./Production";

export class Construction extends Building {
    private readonly progress: number;

    private readonly type: {new(productionFinishCallback: (production: Production) => void): Building, prototype: Building};

    private readonly builders: number[];

    private readonly cost: Cost;

    get availableProductions() {
        return [];
    }

    constructor(type: {new(): Building, prototype: Building}, builders: number[], cost: Cost, productionFinishCallback: (production: Production) => void) {
        super(productionFinishCallback);
        this.type = type;
        this.progress = 0;
        this.builders = builders;
        this.cost = cost;
    }


    tick(world: World): Building {
        const newProgress = this.progress + 3 / (2 + this.builders.length) / this.cost.time;
        if(newProgress > 1 || checkEqual(newProgress, 1)) {
            return new this.type(this.productionFinishCallback);
        }
        return Object.assign({}, this, {progress: newProgress});
    }


}