import { useState } from "react";
import "./PickDeckForm.css";
import { useNavigate } from "react-router-dom";

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
 * -formData(obj) like: { name, deck choice }
 * -formErrors(arr) like: []
 * navigate:
 * -useNavigate(function to redirect user)
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function PickDeckForm({ pullCards }) {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();
  console.log("formData", formData);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData.cardNum, "cardnum");
    try {
      pullCards(Number(formData.spread));
      navigate("/deck");
    } catch (err) {
      setFormErrors(err);
    }
  }

  return (
    <div>
      <img className="small-image" src="/noun-sun-3382507.svg"></img>
      <img className="small-image" src="/noun-moon-3382303.svg"></img>
      <h2>Pick Card Spread</h2>
      <form className="PickDeckForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="w-75 d-flex justify-content-between">
            <select
              id="pickdeck-spread"
              name="spread"
              value={formData.title}
              onChange={handleChange}
              className="form-control form-control-sm d-inline-flex"
            >
              <option value={0}></option>
              <option value={3}>three card</option>
              <option value={5}>five card cross</option>
            </select>
          </div>
        </div>

        {}

        {formData.spread === "3" && (
          <div>
            {" "}
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102188.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102188.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102188.png"
            ></img>
          </div>
        )}

        {formData.spread === "5" && (
          <div>
            {" "}
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102176.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102176.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102176.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102176.png"
            ></img>
            <img
              className="PickDeckForm-card"
              src="/noun-tarot-4102176.png"
            ></img>
          </div>
        )}

        {formErrors.length > 0 && formErrors.map((error) => <p>{error}</p>)}

        <button className="btn-primary btn btn-sm PickDeckForm-addBtn">
          Pull Cards
        </button>
      </form>
    </div>
  );
}

export default PickDeckForm;
