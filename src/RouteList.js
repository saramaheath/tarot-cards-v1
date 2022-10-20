import { Routes, Route, Navigate } from "react-router-dom";
import Deck from "./Deck";
import NewPickDeckForm from "./NewPickDeckForm";
import Homepage from "./Homepage";


/**RouteList, sitewide routes
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
 * -pullCards(function to be called in parent)
 * 
 * state:none
 *
 * RoutesList -> {Deck, PickDeckForm, Homepage}
 */
function RouteList({ cards, pullCards }) {
  return (
    <div>
      <Routes>
        <Route path="/deck" element={<Deck cards={cards} />} />
        <Route
          path="/pickdeck"
          element={<NewPickDeckForm pullCards={pullCards} />}
        />
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default RouteList;
