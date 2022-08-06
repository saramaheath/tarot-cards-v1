import React from 'react';
import './App.css';
import { useState } from React;

BASE_URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=';

function App() {
  const [cards, setCards] = useState([]); 
  console.log('app', 'cards', cards, 'cardNum', cardNum);

  async function pullCards(cardNum){
    const response = await axios.get(`${BASE_URL}${cardNum}`);
    console.log(response, 'response***********');
    setCards(response.cards);
  }

  return (
    <div className="App">
      <h1>Tarot Reading</h1>
      <BrowserRouter>
        <NavBar />
        <RouteList pullCards={pullCards} cards={cards}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
