import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackCard from "./BackCard";
import "./NewPickDeckForm.css";

/** Pick deck form, initializes pulling cards
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls pullCards function
 *
 * props:
 * -pullCards(function to call in parent)
 *
 * state:
 * -deckCount()
 * -formErrors(arr) like: []
 * navigate:
 * -useNavigate(function to redirect user)
 *
 * RouteList -> NewPickDeckForm -> BackCard
 */

function NewPickDeckForm({ pullCards }) {
  const [deckCount, setDeckCount] = useState(0);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState([]);

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(deckCount, "cardnum");
    try {
      pullCards(Number(deckCount));
      navigate("/deck");
    } catch (err) {
      setFormErrors(err);
    }
  }

  function addDeckCount() {
    console.log("CLICKED*****");
    setDeckCount(deckCount + 1);
    console.log(deckCount, "deckCount");
  }
  function subtractDeckCount() {
    setDeckCount(deckCount - 1);
  }

  return (
    <div>
      <div className="NewPickDeckForm">
        <BackCard key={1} addDeckCount={addDeckCount} />
        <BackCard key={2} addDeckCount={addDeckCount} />
        <BackCard key={3} addDeckCount={addDeckCount} />
        <BackCard key={4} addDeckCount={addDeckCount} />
        <BackCard key={5} addDeckCount={addDeckCount} />
        <BackCard key={6} addDeckCount={addDeckCount} />
      </div>
      <div>
        <button onClick={handleSubmit}>Pull Cards</button>
      </div>
    </div>
  );
}

export default NewPickDeckForm;
