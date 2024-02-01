import MeleeArmament from './MeleeArmament.js';

export default class StraightSword extends MeleeArmament {
    constructor(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects) {
        super(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects)

        this.type = "Straight Sword";
    }
}v