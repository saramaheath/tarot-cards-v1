import "./Card.css";
import { useState, useEffect } from "react";

/**Card, renders single card
 *
 * props:
 * -card(obj) like: {
			"name": "Seven of Pentacles",
			"name_short": "pe07",
			"value": "seven",
			"value_int": 7,
			"suit": "pentacles",
			"type": "minor",
			"meaning_up": "These are exceedingly ...",
			"meaning_rev": "Cause for anxiety regarding...",
			"desc": "A young man, leaning on his staff..."
		}
 *state:
 *-isStandardRevealed
 *-isReversedRevealed
 *
 * Deck -> Card
 */
function Card({ card }) {
  const [isStandardRevealed, setIsStandardRevealed] = useState(false);
  const [isReversedRevealed, setIsReversedRevealed] = useState(false);
  const isCardReversed = card.isReversed;
  let suit = card.suit;
  const value = card.value;

  if (suit === undefined) {
    suit = "m";
  }

  function revealStandardMeaning() {
    //render card with standard meaning showing
    setIsStandardRevealed(true);
  }

  function revealReversedMeaning() {
    //render card with reversed meaning showing
    setIsReversedRevealed(true);
  }
  console.log(suit, value);
  return (
    <div className="Card">
      <h3 className="Card-name">{`${card.name}`}</h3>
      {isCardReversed === "reversed" && (
        <img
          className="Card-image-reversed"
          src={`/cards/${suit}${value}.jpg`}
          alt={`${suit}${value}`}
        ></img>
      )}
      {isCardReversed === "standard" && (
        <img
          className="Card-image"
          src={`/cards/${suit}${value}.jpg`}
          alt={`${suit}${value}`}
        ></img>
      )}
      <p className="Card-description">{`${card.desc}`}</p>
      <button onClick={revealStandardMeaning}>Meaning Standard</button>
      {isStandardRevealed && (
        <div className="Card-standard">
          {" "}
          <p>{card.meaning_up}</p>{" "}
        </div>
      )}
      <button onClick={revealReversedMeaning}>Meaning Reversed</button>
      {isReversedRevealed && (
        <div className="Card-reverse">
          {" "}
          <p>{card.meaning_rev}</p>{" "}
        </div>
      )}
    </div>
  );
}

export default Card;
