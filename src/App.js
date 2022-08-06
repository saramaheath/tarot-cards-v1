import React from 'react';
import './App.css';
import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

const BASE_URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=';

function App() {
  const [cards, setCards] = useState([]); 
  console.log('app', 'cards', cards);

  async function pullCards(cardNum){
    const response = await axios.get(`${BASE_URL}${cardNum}`);
    console.log(response, 'response***********');
    setCards(response.data.cards);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <img className="App-homepage-image"src="/noun-mystical-cat-1991106.png"></img>
        <RouteList pullCards={pullCards} cards={cards}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
