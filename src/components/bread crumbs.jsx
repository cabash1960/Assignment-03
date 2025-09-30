import React from "react";

function Crumbs({ onToggleMenu }) {
  return (
    <div className="photo-heading">
      <h2>
        Photography / <span>Premium Photos</span>
      </h2>

      <div className="photo-sort">
        <label htmlFor="sort">↥↧ Sort By</label>
        <select id="sort">
          <option>Price</option>
        </select>
      </div>
      <button onClick={() => onToggleMenu()} className="bugger-icon">
        <img src="./public/images/Group 31.png" alt="hand-bugger" />
      </button>
    </div>
  );
}

export default Crumbs;
