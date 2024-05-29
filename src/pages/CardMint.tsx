import FancyButton from "../components/FancyButton";



export default function CardMint() {
    return (
        <div className="cardMint">
                <FancyButton />
            <div>Each Bidness Card ($BID) will have randomized traits including a randomized discount for services rendered. (These do not stack)</div>

            <div className="card-container">
                <div className="card">
                    <img className="front" src="src/assets/FrontCard.png"></img>
                    <img className="back" src="src/assets/BackCard.png"></img>
                </div>
            </div>
        </div>

    );
}