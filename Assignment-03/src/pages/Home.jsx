import React from "react";
import Header from "../components/header";
import Crumbs from "../components/bread crumbs";
import HeroProduct from "../components/Hero-product";
import Shops from "../components/shops";
import ProductGrid from "../components/productGrid";
import Pagination from "../components/Pagination";

function Home() {
  return (
    <div className="container">
      <section>
        <Header />
        <HeroProduct />
        <Shops />
      </section>
    </div>
  );
}

export default Home;
