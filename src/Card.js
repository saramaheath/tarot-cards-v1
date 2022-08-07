import "./Card.css";

function Card({ card }) {
  let suit = card.suit;
  const value = card.value;

  if (suit === undefined) {
    suit = "m";
  }

  return (
    <div className="Card">
      <h3 className="Card-name">{`${card.name}`}</h3>
      <img className="Card-image" src={`/cards/${suit}${value}.jpg`}></img>
      <p className="Card-description">{`${card.desc}`}</p>
    </div>
  );
}

export default Card;
