import Card from "./Card";

function Deck({ cards }) {
  return (
    <div>
      {cards.map((card) => <Card key={card.name_short} card={card} />)}
    </div>
    ) 
}

export default Deck;
