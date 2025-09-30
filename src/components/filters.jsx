import React from "react";
import "../index.css";
const Filters = ({ onToggleMenu }) => {
  // const handleMenuClick = () => {
  //   if (onToggleMenu) {
  //     onToggleMenu();
  //   }
  // };

  return (
    <aside className="photo-categories ">
      <div className="filter category-filter">
        <h3>Category</h3>
        <ul>
          <li>
            <input type="checkbox" /> People
          </li>
          <label>
            <input type="checkbox" /> Premium
          </label>
          <li>
            <input type="checkbox" /> Pets
          </li>
          <li>
            <input type="checkbox" /> Food
          </li>
          <li>
            <input type="checkbox" /> Landmarks
          </li>
          <li>
            <input type="checkbox" /> Cities
          </li>
          <li>
            <input type="checkbox" /> Nature
          </li>
        </ul>
      </div>

      <div className="price-filter filter">
        <h3>Price Range</h3>
        <ul>
          <li>
            <input type="checkbox" /> Lower than $20
          </li>
          <li>
            <input type="checkbox" /> $20–$100
          </li>
          <li>
            <input type="checkbox" /> $100–$200
          </li>
          <li>
            <input type="checkbox" /> More than $200
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
