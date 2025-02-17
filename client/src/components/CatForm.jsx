import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CatForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "", // Default neighborhood
    image: "",
    description: "",
    colour: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const res = await fetch("http://localhost:4000/api/cats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      navigate("/");
    } else {
      const errorData = await res.json();
      setError(errorData.error || "Failed to add cat.");
    }
  }

  return (
    <div>
      <h2>Add a New Cat</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <select name="location" onChange={handleChange} required>
          <option value="Leith">Leith</option>
          <option value="New Town">New Town</option>
          <option value="Old Town">Old Town</option>
          <option value="Stockbridge">Stockbridge</option>
          <option value="Morningside">Morningside</option>
          <option value="Portobello">Portobello</option>
          <option value="Southside">Southside</option>
          <option value="Tollcross">Tollcross</option>
          <option value="Bruntsfield">Bruntsfield</option>
          <option value="Gorgie">Gorgie</option>
          <option value="Dalry">Dalry</option>
          <option value="Corstorphine">Corstorphine</option>
          <option value="South Queensferry">South Queensferry</option>
          <option value="West End">West End</option>
        </select>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="colour" placeholder="Colour" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CatForm;



