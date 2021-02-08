import {Civ} from "./Civ";
import {Villager} from "./Villager";
import {Building} from "./Building";
import {TC} from "./buildings/TC";
import {Production} from "./Production";
import {House} from "./buildings/House";
import {Modifiers} from "./GenericModifiers";
import _ from "lodash";
import {Castle} from "./buildings/Castle";

export class World {
    readonly modifier: Modifiers;
    readonly villagers: Villager[];
    readonly buildings: Building[];
    readonly units: {
        [unitName: string]: number;
    };

    constructor(civ: Civ) {
        this.modifier = civ.startingModifier;
        this.villagers = [];
        this.buildings = [new TC(this.handleProductionFinish.bind(this))];
        this.units = {};
    }

    tick(): World {
        return this;
    }

    isPopCapped(): boolean {
        return this.getCurrentPop() >= this.getPopLimit();
    }

    private getCurrentPop(): number {
        return this.villagers.length + _.sum(Object.values(this.units));
    }

    private getPopLimit(): number {
        const {houses, tcs, castles} = this.buildings.reduce((prev, x) => {
            if (x instanceof House) {
                return Object.assign({}, prev, {houses: prev.houses + 1});
            } else if (x instanceof TC) {
                return Object.assign({}, prev, {tcs: prev.tcs + 1});
            } else if (x instanceof Castle) {
                return Object.assign({}, prev, {castles: prev.castles + 1});
            }
            return prev;
        }, {houses: 0, tcs: 0, castles: 0});
        return Math.min(houses * this.modifier.housePopSpace +
            tcs * this.modifier.tcPopSpace +
            castles * this.modifier.castlePopSpace,
            this.modifier.maxPopSpace);
    }

    private handleProductionFinish(finishedProduction: Production) {
        return;
    }
}