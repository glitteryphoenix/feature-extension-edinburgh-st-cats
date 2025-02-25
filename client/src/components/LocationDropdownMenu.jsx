import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function LocationDropDownMenu({ handleChange }) {
  const [location, setLocation] = useState("");
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Location
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Leith";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Leith"
          href="#/action-1"
        >
          Leith
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "New Town";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="New Town"
          href="#/action-2"
        >
          New Town
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Old Town";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Old Town"
          href="#/action-3"
        >
          Old Town
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Stockbridge";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Stockbridge"
          href="#/action-4"
        >
          Stockbridge
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Morningside";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Morningside"
          href="#/action-5"
        >
          Morningside
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Portobello";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Portobello"
          href="#/action-6"
        >
          Portobello
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Southside";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Southside"
          href="#/action-7"
        >
          Southside
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Tollcross";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Tollcross"
          href="#/action-8"
        >
          Tollcross
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Bruntsfield";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Bruntsfield"
          href="#/action-9"
        >
          Bruntsfield
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Gorgie";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Gorgie"
          href="#/action-10"
        >
          Gorgie
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Dalry";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="Dalry"
          href="#/action-11"
        >
          Dalry
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "Corstorphine";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value=" Corstorphine"
          href="#/action-12"
        >
          Corstorphine
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "South Queensferry";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="South Queensferry"
          href="#/action-13"
        >
          South Queensferry
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(e) => {
            e.target.value = "West End";
            e.target.name = "location";
            handleChange(e);
          }}
          name="location"
          value="West End"
          href="#/action-14"
        >
          West End
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocationDropDownMenu;
