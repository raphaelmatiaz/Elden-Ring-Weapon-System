import Axe from "../../Modules/Axe.js"

let HighlandAxe = new Axe (
"Highland Axe",           // name
"Axe",                // type
"Slash",               // attackType
"War Cry",           // skill
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
"../Images/highland_axe.png" //img Link
);



export default HighlandAxe; //export the instance of Hand Axe 
