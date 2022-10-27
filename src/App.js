import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

const BASE_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=";

/**Tarot Card Application
 *
 * props:none
 *
 * state:
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
 * App -> { NavBar, RouteList }
 *
 */
function App() {
  const [cards, setCards] = useState([]);
  console.log("app", "cards", cards);

  /**API Call for getting random cards by requested number
   * TAKES: cardNum (int)
   * sets state with card response data
   */
  async function pullCards(cardNum) {
    const response = await axios.get(`${BASE_URL}${cardNum}`);
    const cardsWithOrientation = response.data.cards.map((card) => ({
      isReversed: reversedOrStandard(),
      ...card,
    }));
    setCards(cardsWithOrientation);
  }

  /**returns str (reversed or standard) randomly with 32% odds
   */
  function reversedOrStandard() {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 32) {
      return "reversed";
    } else {
      return "standard";
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList pullCards={pullCards} cards={cards} />
      </BrowserRouter>
    </div>
  );
}

export default App;
