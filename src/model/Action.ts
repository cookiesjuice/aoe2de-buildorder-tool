import {World} from "./World";

export abstract class Action {
    abstract tick(world: World): Action;
    abstract run(world: World): World;
    abstract isDone(): boolean;
}