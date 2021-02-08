import {Work} from "./Work";
import {World} from "./World";

export class Villager {
    readonly delay: number;
    readonly work: Work;

    constructor(work: Work, delay: number) {
        this.work = work;
        this.delay = delay;
    }

    tick(world: World): Villager {
        const newWork = this.work.updateBy(world);
        const newDelay = this.delay > 1 ? this.delay - 1 : 0;
        return Object.assign({}, this, {work: newWork, delay: newDelay});
    }
}