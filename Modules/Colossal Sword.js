import MeleeArmament from "./Modules/MeleeArmaments.js";

export default class ColossalSword extends MeleeArmament {
    constructor(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects) {
        super(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects)

        this.type = "Colossal Sword";
    }
}