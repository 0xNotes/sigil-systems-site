import React, { useState, useEffect, useRef } from "react";
import FancyButton from "../components/FancyButton";

// Generate image paths
const imageCount = 7; // Update this count based on the number of images
const images = Array.from({ length: imageCount }, (_, i) => `src/assets/cardBack/${i + 1}.png`);

export default function CardMint() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAnimationIteration = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      // For randomization, use the following line instead:
      // setCurrentIndex(Math.floor(Math.random() * images.length));
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("animationiteration", handleAnimationIteration);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("animationiteration", handleAnimationIteration);
      }
    };
  }, []);

  return (
    <div className="cardMint">
      <div className="card-container">
        <div className="card" ref={cardRef}>
          <img className="front" src="src/assets/cardFront/FRONT.png" />
          <img className="back" src={images[currentIndex]} />
        </div>
      </div>

      <div>
        <FancyButton />
        {/* <div>Each Bidness Card ($BID) will have randomized traits including a randomized discount for services rendered. (These do not stack)</div> */}
      </div>
    </div>
  );
}
