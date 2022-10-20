import "./BackCard.css";
import { useState } from "react";

function BackCard({ addDeckCount }) {
  const [cardStyleClass, setCardStyleClass] = useState("BackCard-image");

  function changeCardColor() {
    setCardStyleClass("BackCard-image-clicked");
  }
  return (
    <img
      onClick={() => {
        addDeckCount();
        changeCardColor();
      }}
      className={cardStyleClass}
      src="backcard-tarot.png"
      alt="back of card"
    ></img>
  );
}

export default BackCard;
