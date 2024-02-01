import HandAxe from "./Melee Armaments/Axes/Hand Axe.js";
import StormhawkAxe from "./Melee Armaments/Axes/StormhawkAxe.js";
import ForkedHatchet from "./Melee Armaments/Axes/ForkedHatchet.js";
import RosusAxe from "./Melee Armaments/Axes/RosusAxe.js";
import RippleBlade from "./Melee Armaments/Axes/RippleBlade.js";
import IcerindHatchet from "./Melee Armaments/Axes/IcerindHatchet.js";
import BattleAxe from "./Melee Armaments/Axes/BattleAxe.js";
import WarpedAxe from "./Melee Armaments/Axes/WarpedAxe.js";
import CelebrantsCleaver from "./Melee Armaments/Axes/CelebrantsCleaver.js";
import SacrificialAxe from "./Melee Armaments/Axes/SacrificialAxe.js";
import HighlandAxe from "./Melee Armaments/Axes/HighlandAxe.js";
import JawboneAxe from "./Melee Armaments/Axes/JawboneAxe.js";
import IronCleaver from "./Melee Armaments/Axes/IronCleaver.js";





window.onload = () => {


    const h1 = document.createElement("h1")
    h1.innerText = "ELDEN RING"
    document.body.appendChild(h1)

    const h2 = document.createElement("h2")
    h2.innerText = "Weapon Wiki"
    document.body.appendChild(h2)



    const AxesList = document.createElement("h3")
    document.body.appendChild(AxesList)
    AxesList.innerText = "----- Axes -----"

    
    HandAxe.displayWeaponImage(HandAxe);
    HandAxe.displayWeaponSpecs(HandAxe);

    StormhawkAxe.displayWeaponImage(StormhawkAxe);
    StormhawkAxe.displayWeaponSpecs(StormhawkAxe);

    ForkedHatchet.displayWeaponImage(ForkedHatchet);
    ForkedHatchet.displayWeaponSpecs(ForkedHatchet);

    RosusAxe.displayWeaponImage(RosusAxe);
    RosusAxe.displayWeaponSpecs(RosusAxe);

    RippleBlade.displayWeaponImage(RippleBlade);
    RippleBlade.displayWeaponSpecs(RippleBlade);

    IcerindHatchet.displayWeaponImage(IcerindHatchet);
    IcerindHatchet.displayWeaponSpecs(IcerindHatchet);

    BattleAxe.displayWeaponImage(BattleAxe);
    BattleAxe.displayWeaponSpecs(BattleAxe);

    WarpedAxe.displayWeaponImage(WarpedAxe);
    WarpedAxe.displayWeaponSpecs(WarpedAxe);

    CelebrantsCleaver.displayWeaponImage(CelebrantsCleaver);
    CelebrantsCleaver.displayWeaponSpecs(CelebrantsCleaver);

    SacrificialAxe.displayWeaponImage(SacrificialAxe);
    SacrificialAxe.displayWeaponSpecs(SacrificialAxe);

    HighlandAxe.displayWeaponImage(HighlandAxe);
    HighlandAxe.displayWeaponSpecs(HighlandAxe);

    JawboneAxe.displayWeaponImage(JawboneAxe);
    JawboneAxe.displayWeaponSpecs(JawboneAxe);

    IronCleaver.displayWeaponImage(IronCleaver);
    IronCleaver.displayWeaponSpecs(IronCleaver);








    const ClawsList = document.createElement("h3")
    document.body.appendChild(ClawsList)
    ClawsList.innerText = "----- Claws -----"

    


}