import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Sigil from "../assets/Sigil.svg";
import SYSTEMS from "../assets/SYSTEMS.svg";
import FancyButton from "../components/FancyButton";


export default function Home() {
    const [offsetY, setOffsetY] = useState(0);


    // Function to check if the current device is mobile
    const isMobile = () => window.innerWidth <= 600; // 600px as the upper limit for mobile devices

    useEffect(() => {
        if (isMobile()) {
            // Do nothing for mobile devices
            return;
        }

        function handleScroll() {
            setOffsetY(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const slideSlower = isMobile() ? 0 : offsetY * 0.1; // No slide effect on mobile

    return (
        <div className="home">
            <div className="logo-container">
                <img
                    className="logo-slide-sigil"
                    style={{ transform: `translateX(-${slideSlower}rem)` }}
                    src={Sigil}
                    alt="Sigil logo"
                />
                <img
                    className="logo-slide-systems"
                    style={{ transform: `translateX(${slideSlower}rem)` }}
                    src={SYSTEMS}
                    alt="Systems logo"
                />
            </div>
            <FontAwesomeIcon className="arrow" icon={faArrowDown} />

            <div className="video-container">

                <div className="video">
                    <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        src="https://www.youtube.com/embed/iYF3LSpjLVE"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        src="https://www.youtube.com/embed/9ipx9EObxR4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="description-container">
                <section id="portfolio">
                    <h1>Professional Full Stack Engineer</h1>
                    <h2>Web3, Web2, and Legacy System Expertise</h2>
                    <p>Welcome to my portfolio! I am a versatile and seasoned full stack engineer, specializing in a comprehensive range of development services spanning Web3, Web2, and legacy systems. My expertise lies in creating robust, scalable, and innovative solutions tailored to meet the evolving needs of businesses and individuals in the digital age.</p>

                    <section id="skills">
                        <h3>Key Skills and Technologies:</h3>
                        <ul>
                            <li><strong>Front-End Development:</strong> Proficient in React, Angular, and Vue.</li>
                            <li><strong>Back-End Development:</strong> Skilled in JavaScript and TypeScript.</li>
                            <li><strong>Versatile Programming:</strong> Experienced in C#, C++, C, Java, and Python.</li>
                            <li><strong>Web Development:</strong> Specialized in designing and developing functional and SEO-friendly websites.</li>
                            <li><strong>Hosting and Administration:</strong> Expert in managing website hosting and administration.</li>
                            <li><strong>Blockchain Solutions:</strong> Adept in creating smart contracts, developing NFTs, and building APIs.</li>
                            <li><strong>Full Stack Engineering:</strong> Comprehensive handling of development from concept to deployment.</li>
                        </ul>
                    </section>

                    <section id="offer">
                        <h3>What I Offer:</h3>
                        <p>Customized solutions, quality and reliability, and end-to-end services for a hassle-free development experience.</p>
                    </section>

                    <p>If you're looking for a skilled engineer to bring your vision to life with innovative and effective solutions, <a href="mailto:ross@sigil.systems">let's connect</a>.</p>
                </section>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                {/* <ConnectButton /> */}
                <FancyButton />
            </div>


        </div>
    );
}
