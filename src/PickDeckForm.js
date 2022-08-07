import { useState } from "react";
import "./PickDeckForm.css";
import { useNavigate } from "react-router-dom";

function PickDeckForm({ pullCards }) {
  const [formData, setFormData] = useState({});
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
    pullCards(formData.cardNum);
    navigate("/deck");

  }

  return (
    <div>
      <img className="small-image"src="/noun-sun-3382507.svg"></img>
      <img className="small-image"src="/noun-moon-3382303.svg"></img>
      <h2>Pull Your Cards</h2>
      <form className="PickDeckForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            id="pickdeck-cardNum"
            name="cardNum"
            className="form-control"
            placeholder="Number of Cards"
            onChange={handleChange}
            value={formData.title}
            aria-lable="Card number"
          ></input>
        </div>

        <div className="mb-3">
          <input
            id="pickdeck-name"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            value={formData.title}
            aria-lable="Name"
          ></input>
        </div>

        <div className="mb-3">
          <input
            id="pickdeck-dob"
            name="dob"
            className="form-control"
            placeholder="DOB"
            onChange={handleChange}
            value={formData.title}
            aria-lable="DOB"
          ></input>
        </div>
        <button className="btn-primary btn btn-sm PickDeckForm-addBtn">
          Pull Cards
        </button>
      </form>
    </div>
  );
}

export default PickDeckForm;
