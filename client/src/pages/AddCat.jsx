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
    colour: ""
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    console.log(e.target)
    console.log(e.target.value, e.target.name)
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
    <div className="add-cat-container">
      <div className="card p-4 shadow-lg add-cat-form">
        <h2 className="text-center mb-4">🐱 Add a New Cat</h2>

        {error && <p className="alert alert-danger">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Cat Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location:</label>
            <LocationDropDownMenu handleChange={handleChange}/>
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Optional - paste an image URL"
            />
          </div>

          
         

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Colour:</label>
            <input
              type="text"
              className="form-control"
              name="colour"
              value={formData.colour}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">➕ Add Cat</button>
        </form>
      </div>
    </div>
  );
}

export default AddCat;



