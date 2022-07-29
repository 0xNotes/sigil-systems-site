import { useEffect, useState } from "react";


export default function Home() {

    const [offsetY, setOffsetY] = useState(0);

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


    return(
        <div className="Home">
            TEST
        </div>
    );
}