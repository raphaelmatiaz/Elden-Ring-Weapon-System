export default class MeleeArmament {

    constructor(name, type, attackType, skill, fpCost, staCost, weight, sellPrice, onlineTrade, attackPower, guardedDamageNegation, attributesRequired, passiveEffects, imageSrc) {
    this.name = name;
    this.type = type;
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
            str: undefined,
            dex: undefined,
            int: undefined,
            fth: undefined,
            arc: undefined
        }
    ];

    this.passiveEffects = [];

    this.imageSrc = imageSrc
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

    displayWeaponSpecs(weapon) {
        let specsList = document.createElement("ul");
        document.body.appendChild(specsList);
    
        Object.keys(weapon).forEach(attribute => {
            let newLi = document.createElement("li");
            newLi.innerText = `${attribute}:`;
    
            if (Array.isArray(weapon[attribute])) {
                // Handle arrays of objects
                let nestedList = document.createElement("ul");
    
                weapon[attribute].forEach(obj => {
                    let nestedLi = document.createElement("li");
                    Object.keys(obj).forEach(key => {
                        let nestedItem = document.createElement("li");
                        nestedItem.innerText = `${key}: ${obj[key]}`;
                        nestedLi.appendChild(nestedItem);
                    });
                    nestedList.appendChild(nestedLi);
                });
    
                newLi.appendChild(nestedList);
            } else {
                // Handle other attributes
                newLi.innerText += ` ${weapon[attribute]}`;
            }
    
            specsList.appendChild(newLi);
        });
    }

    displayWeaponImage(weapon) {
        let weaponImage = document.createElement("img");
        document.body.appendChild(weaponImage);
        weaponImage.src = (weapon.imageSrc);
    }

    
}