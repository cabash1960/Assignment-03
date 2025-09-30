import React from "react";
import "../index.css";
function Pagination() {
  return (
    <nav className="pagination">
      <a className="navigate arrow">&lt;</a>
      <a className="navigate">1</a>
      <a className="navigate">2</a>
      <a className="navigate">3</a>
      <a className="navigate arrow">&gt;</a>
    </nav>
  );
}

export default Pagination;
