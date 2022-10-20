import "./Card.css";
import { useState } from "react";

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
 * RoutesList -> MenuItem
 */
function Card({ card }) {
  const [isStandardRevealed, setIsStandardRevealed] = useState(false);
  const [isReversedRevealed, setIsReversedRevealed] = useState(false);
  let suit = card.suit;
  const value = card.value;

  if (suit === undefined) {
    suit = "m";
  }

  function revealStandard() {
    //render card with meaning showing
    setIsStandardRevealed(true);
  }

  function revealReversed() {
    //render card with meaning showing
    setIsReversedRevealed(true);
  }

  return (
    <div className="Card">
      <h3 className="Card-name">{`${card.name}`}</h3>
      <img
        className="Card-image"
        src={`/cards/${suit}${value}.jpg`}
        alt={`${suit}${value}`}
      ></img>
      <p className="Card-description">{`${card.desc}`}</p>
      <button onClick={revealStandard}>Meaning Standard</button>
      <button onClick={revealReversed}>Meaning Reversed</button>
      {isStandardRevealed && (
        <div>
          {" "}
          <p>{card.meaning_up}</p>{" "}
        </div>
      )}
      {isReversedRevealed && (
        <div>
          {" "}
          <p>{card.meaning_rev}</p>{" "}
        </div>
      )}
    </div>
  );
}

export default Card;
