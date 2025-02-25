import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationDropDownMenu from "../components/LocationDropdownMenu";

function AddCat() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
    colour: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:4000/api/cats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to add cat.");
      }

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div
      className="add-cat-container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#d9d9d9" }} // Set the background color here
    >
      <div className="card p-4 add-cat-form w-50 border-0 bg-white"> {/* Set the card's background color to white */}
        <h2 className="text-center mb-4">Add New Cat</h2>

        {error && <p className="alert alert-danger">{error}</p>}

        {/* NAME */}
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="basic-addon1">Name</label>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="If you don't know the cat's name, then guess!"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          {/* LOCATION */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="locationSelect">Location</label>
            </div>
            <LocationDropDownMenu handleChange={handleChange} />
          </div>

          {/* IMAGE URL */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://...."
              aria-describedby="basic-addon2"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">Description</span>
            </div>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Include any relevant information about this cat."
              required
              aria-describedby="basic-addon3"
            ></textarea>
          </div>

          {/* COLOUR */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon4">Colour</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="colour"
              value={formData.colour}
              onChange={handleChange}
              required
              aria-describedby="basic-addon4"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn w-30"
            style={{
              backgroundColor: "#29733C",
              borderColor: "#29733C",
              color: "white",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCat;


// export default AddCat;
