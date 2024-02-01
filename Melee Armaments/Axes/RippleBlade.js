import Axe from "../../Modules/Axe.js"


let RippleBlade = new Axe( 
"Ripple Blade",           // name
"Axe",                // type
"Slash",               // attackType
"Wild Strikes",           // skill
3,                    // fpCost
20,                    // staCost
3.5,                     // weight
100,                   // sellPrice
true,                  // onlineTrade
{                      // attackPower
  physical: 117,
  magical: 0,
  fire: 0,
  lightning: 0,
  holy: 0,
  critical: 100
},
{                      // guardedDamageNegation
  physical: 42,
  magical: 28,
  fire: 28,
  lightning: 28,
  holy: 28,
  guardBoost: 28
},
{                      // attributesRequired
  str: { "1hand": 9, "2hand": 5 },
  dex: 8,
  int: 0,
  fth: 0,
  arc: 0
},
[],  // passiveEffects
"../Images/ripple_blade.png" //img Link
);



export default RippleBlade; //export the instance of Hand Axe 