import { useEffect, useState } from "react";
import logo from "../assets/SigilSystems.svg";


export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const handleScroll = (event: any)  => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
      };
    

    return(
        <div className="Home" onScroll={handleScroll}>
            <img className="Logo" src={logo}/>
        </div>
    );
}