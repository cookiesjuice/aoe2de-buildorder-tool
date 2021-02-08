import {World} from "./World";

export abstract class Work {
    abstract readonly income: Resources;
    abstract updateBy(world: World): Work;
}
