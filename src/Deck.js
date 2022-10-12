import Card from "./Card";

/**Deck, renders list of cards 
 *
 * props:
 * -cards(arr) like: [{
			"name": "Seven of Pentacles",
			"name_short": "pe07",
			"value": "seven",
			"value_int": 7,
			"suit": "pentacles",
			"type": "minor",
			"meaning_up": "These are exceedingly ...",
			"meaning_rev": "Cause for anxiety regarding...",
			"desc": "A young man, leaning on his staff..."
		}, 
    {...}, ...]
 * 
 * state:none
 *
 * RoutesList -> Deck -> Card
 */

function Deck({ cards }) {
  return (
    <div>
      {cards.map((card) => <Card key={card.name_short} card={card} />)}
    </div>
    ) 
}

export default Deck;
