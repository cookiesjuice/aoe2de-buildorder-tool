import {Production} from "./Production";
import {World} from "./World";

export abstract class Building {
    readonly production?: Production;
    abstract readonly availableProductions: Production[];

    readonly productionFinishCallback: (production: Production) => void;

    protected constructor(productionFinishCallback: (production: Production) => void) {
        this.productionFinishCallback = productionFinishCallback;
    }

    startProduction(production: Production): Building {
        return Object.assign({}, this, {production: production});
    }

    tick(world: World): Building {
        const productionNextTick = this.production?.tick(world);
        if(productionNextTick?.isFinished()) {
            this.productionFinishCallback(productionNextTick);
            return Object.assign({}, this, {production: undefined});
        }
        return Object.assign({}, this, {production: productionNextTick});
    }
}