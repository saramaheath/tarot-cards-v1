import { useState } from "react";

function PickDeckForm() {
  const [formData, setFormData] = useState();

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
    pullCards(formData.cardNum);
  }

  return (
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
  );
}

export default PickDeckForm;
