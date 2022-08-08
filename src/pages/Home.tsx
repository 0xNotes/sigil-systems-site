import { useEffect, useState } from "react";
import logo from "../assets/SigilSystems.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Sigil from "../assets/Sigil.svg";
import SYSTEMS from "../assets/SYSTEMS.svg";



export default function Home() {

    const [animationPlay, setAnimationPlay] = useState(false);

    const handleScroll = (event: any) => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };

    const [offsetY, setOffsetY] = useState(0);
    const slideSlower = offsetY * 0.1;

    useEffect(() => {
        function handleScroll() {
          setOffsetY(window.pageYOffset);
          console.log(offsetY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [offsetY]);

    return (
        <div className="Home" onScroll={handleScroll}>
            <div className="LogoContainer">
                {(offsetY !== 0) ? <img className="LogoSlideSigil" style={{transform: `translatex(-${slideSlower}rem)`}}  src={Sigil} />
                    : <img className="LogoSigil" src={Sigil} />
                }
                {/* <img className="LogoSigil" src={Sigil} /> */}
                {(offsetY !== 0) ? <img className="LogoSlideSystems" style={{transform: `translatex(${slideSlower}rem)`}} src={SYSTEMS} /> :
                    <img className="LogoSystems" src={SYSTEMS} />
                }
                {/* <img className="LogoSystems" src={SYSTEMS} /> */}
            </div>
            <FontAwesomeIcon className="Arrow" icon={faArrowDown} />
        </div>
    );
}