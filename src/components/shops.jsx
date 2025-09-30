import React, { useRef } from "react";
import Filters from "./filters";
import ProductGrid from "./productGrid";
import Crumbs from "./bread crumbs";

function Shops() {
  const ref = useRef(null);
  // const [isHidden, setIsHidden] = useState(false);

  function toggleMenu() {
    // setIsHidden(true);
    ref.current.classList.add("active");
    console.log(ref.current.classList);
  }

  function closeToggleMenu() {
    // setIsHidden(false);
    ref.current.classList.remove("active");
  }

  return (
    <section className="shop">
      <Crumbs onToggleMenu={toggleMenu} />
      <div className="photo-sec">
        <Filters
          onCloseToggleMenu={closeToggleMenu}
          // value={isHidden}
          ref={ref}
        />
        <ProductGrid />
      </div>
    </section>
  );
}

export default Shops;
