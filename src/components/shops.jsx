import React from "react";
import Filters from "./filters";
import ProductGrid from "./productGrid";
import Crumbs from "./bread crumbs";
import { useState } from "react";

function Shops() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    // Handle menu toggle logic here
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="shop">
      <Crumbs onToggleMenu={handleToggle} />
      <div className="photo-sec">
        <Filters onToggleMenu={handleToggle} />
        <ProductGrid />
      </div>
    </section>
  );
}

export default Shops;
