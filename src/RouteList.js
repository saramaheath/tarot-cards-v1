import { Routes, Route, Navigate } from "react-router-dom";
import Deck from "./Deck";
import PickDeckForm from "./PickDeckForm";

function RouteList({ cards, pullCards }) {
  return (
    <div>
      <Routes>
        <Route path="/deck" element={<Deck cards={cards} />} />
        <Route
          path="/pickdeck"
          element={<PickDeckForm pullCards={pullCards} />}
        />
      </Routes>
    </div>
  );
}

export default RouteList;
