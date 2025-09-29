import React from "react";
import ProductCard from "./productCard";
import Pagination from "./Pagination";
function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Red Bench",
      category: "People",
      price: 3.89,
      img: "src/assets/images/Rectangle 10.2.png",
    },
    {
      id: 2,
      title: "Egg Balloon",
      category: "Food",
      price: 93.89,
      img: "src/assets/images/Rectangle 10.png",
    },
    {
      id: 3,
      title: "Architecture",
      category: "Landmarks",
      price: 101.0,
      img: "src/assets/images/Rectangle 10.1.png",
    },
    {
      id: 4,
      title: "Architecture",
      category: "Landmarks",
      price: 101.0,
      img: "src/assets/images/Rectangle 10.2.png",
    },
    {
      id: 5,
      title: "Architecture",
      category: "Landmarks",
      price: 101.0,
      img: "src/assets/images/Rectangle 10.png",
    },
    {
      id: 6,
      title: "Architecture",
      category: "Landmarks",
      price: 101.0,
      img: "src/assets/images/Rectangle 10.1.png",
    },
  ];

  return (
    <main className="photos">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      <Pagination />
    </main>
  );
}

export default ProductGrid;
