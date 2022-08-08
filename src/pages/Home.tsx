import { useEffect, useState } from "react";
import logo from "../assets/SigilSystems.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Sigil from "../assets/Sigil.svg";
import SYSTEMS from "../assets/SYSTEMS.svg";



export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const handleScroll = (event: any) => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };


    return (
        <div className="Home" onScroll={handleScroll}>
            <div className="LogoContainer">
                <img className="LogoSigil" src={Sigil} />
                <img className="LogoSystems" src={SYSTEMS} />
            </div>
            <FontAwesomeIcon className="Arrow" icon={faArrowDown} />
        </div>
    );
}