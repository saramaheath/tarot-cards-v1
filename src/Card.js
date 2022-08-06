function Card({ card }){
   const suit = card.suit;
   const value = card.value;

   if(suit === undefined){
    suit = 'm';
   }
     
    return (
        <div className="Card">
            <img src={`/cards/${suit}${value}.jpg`}></img>
        </div>
    )
}

export default Card;