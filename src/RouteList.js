import { Routes, Route, Navigate } from "react-router-dom";
import Deck from "./Deck";
import PickDeckForm from "./PickDeckForm";
import Homepage from "./Homepage";


function RouteList({ cards, pullCards }) {
  return (
    <div>
      <Routes>
        <Route path="/deck" element={<Deck cards={cards} />} />
        <Route
          path="/pickdeck"
          element={<PickDeckForm pullCards={pullCards} />}
        />
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default RouteList;
