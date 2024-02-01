import MeleeArmament from './MeleeArmament.js';

export default class Axe extends MeleeArmament {
    constructor(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects, imageSrc) {
        super(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects, imageSrc)

        this.type = "Axe";
    }
}