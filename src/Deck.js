import Card from "./Card";

function Deck({ cards }) {
  return cards.map((card) => <Card key={card.name_short} card={card} />);
}

export default Deck;
