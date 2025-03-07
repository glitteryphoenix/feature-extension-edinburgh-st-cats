import React from "react";

const LocationDropDownMenu = ({ handleChange }) => {
  const locations = [
    "Leith",
    "Old Town",
    "New Town",
    "Stockbridge",
    "Morningside",
    "Portobello",
    "Southside",
    "Tollcross",
    "Bruntsfield",
    "Gorgie",
    "Dalry",
    "Corstorphine",
    "South Queensferry",
    "West End",
  ];

  return (
    <select
      className="form-select"
      id="locationSelect"
      name="location"
      onChange={handleChange}
      style={{ maxWidth: "400px" }}
    >
      <option value="" disabled selected>
        Choose location...
      </option>
      {locations.map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default LocationDropDownMenu;