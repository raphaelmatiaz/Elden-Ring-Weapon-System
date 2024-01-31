import MeleeArmament from "./Modules/MeleeArmaments.js";

export default class Greataxe extends MeleeArmament {
    constructor(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects) {
        super(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects)

        this.type = "Greataxe";
    }
}