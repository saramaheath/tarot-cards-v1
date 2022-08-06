function Card({ card }){
   let suit = card.suit;
   const value = card.value;

   if(suit === undefined){
    suit = 'm';
   }
     
    return (
        <div className="Card">
            <img src={`/cards/${suit}${value}.jpg`}></img>
            <h3>{`${card.name}`}</h3>
            <p>{`${card.desc}`}</p>
        </div>
    )
}

export default Card;