import {checkEqual} from "../utils";
import {World} from "./World";

export abstract class Production {
    abstract readonly cost: Cost;
    readonly progress: number;

    protected constructor() {
        this.progress = 0;
    }

    tick(world: World): Production {
        return Object.assign({}, this,{progress: this.progress + 1 / this.cost.time});
    }

    isFinished(): boolean {
        return this.progress > 1 || checkEqual(this.progress, 1);
    }
}