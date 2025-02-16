import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCat() {
  const [formData, setFormData] = useState({
    name: "",
    location: "Edinburgh",
    image: "",
    description: "",
    colour: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/cats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => navigate("/"))
      .catch((err) => console.error("Error adding cat:", err));
  }

  return (
    <div>
      <h1>Add a Cat</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Cat Name" onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="text" name="colour" placeholder="Colour" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCat;
