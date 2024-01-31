export default class MeleeArmament {

    constructor(type, name, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects) {
    this.type = type;
    this.name = name;
    this.attackType = attackType;
    this.skill = skill;
    this.fpCost = fpCost;
    this.staCost = staCost;
    this.weight = weight;
    this.sellPrice = sellPrice;
    this.onlineTrade = onlineTrade;

    this.attackPower = [

        {
            physical: undefined,
            magical: undefined,
            fire: undefined,
            lightning: undefined,
            holy: undefined,
            critical: undefined
        }
    
        
    ];
    
    this.guardedDamageNegation = [

        {
            physical: undefined,
            magical: undefined,
            fire: undefined,
            lightning: undefined,
            holy: undefined,
            guardBoost: undefined
        }
    ];

    this.attributesRequired = [

        {
            str: [ {"1hand": undefined, "2hand": undefined}],
            dex: undefined,
            int: undefined,
            fth: undefined,
            arc: undefined
        }
    ];

    this.passiveEffects = [];
};

    setAttackPower(physical, magical, fire, lightning, holy, critical) {
        this.attackPower = {physical, magical, fire, lightning, holy, critical};
    };

    setGuardedDamageNegation(physical, magical, fire, lightning, holy, guardBoost) {
        this.guardedDamageNegation = {physical, magical, fire, lightning, holy, guardBoost};
    };

    setAttributesRequired(str1hand, str2hand, dex, int, fth, arc) {
        this.attributesRequired = { str: { "1hand": str1hand, "2hand": str2hand }, dex, int, fth, arc };
    };

    addPassiveEffect(effect) {
        this.passiveEffects.push(effect);
    };
}