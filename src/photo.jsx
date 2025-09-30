import React, { useState } from "react";

const PhotographyWebsite = () => {
  const [sortBy, setSortBy] = useState("Price");
  const [categoryFilters, setCategoryFilters] = useState({
    people: false,
    premium: false,
    pets: false,
    food: false,
    landmarks: false,
    cities: false,
    nature: false,
  });
  const [priceFilters, setPriceFilters] = useState({
    under20: false,
    from20to100: false,
    from100to200: false,
    over200: false,
  });

  const handleCategoryChange = (category) => {
    setCategoryFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handlePriceChange = (priceRange) => {
    setPriceFilters((prev) => ({
      ...prev,
      [priceRange]: !prev[priceRange],
    }));
  };

  const photoItems = [
    {
      id: 1,
      image: "/assets/Rectangle 10.2.png",
      category: "People",
      title: "Read Bench",
      price: 3.89,
      isBest: true,
    },
    {
      id: 2,
      image: "/assets/Rectangle 10.png",
      category: "Food",
      title: "Egg Balloon",
      price: 3.89,
      isBest: false,
    },
    {
      id: 3,
      image: "/assets/Rectangle 10.1.png",
      category: "Food",
      title: "Egg Balloon",
      price: 3.89,
      isBest: false,
    },
    {
      id: 4,
      image: "/assets/Rectangle 10.2.png",
      category: "People",
      title: "Man",
      price: 3.89,
      isBest: false,
    },
    {
      id: 5,
      image: "/assets/Rectangle 10.png",
      category: "Land",
      title: "Architecture",
      price: 3.89,
      isBest: false,
    },
    {
      id: 6,
      image: "/assets/Rectangle 10.2.png",
      category: "people",
      title: "Architecture",
      price: 3.89,
      isBest: false,
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <section>
        <header>
          <div className="nav">
            <img src="/assets/Group 12.png" alt="logo" />
            <nav className="nav-links">
              <ul>
                <li>
                  <a href="#">
                    <img src="/assets/Group 3.1.png" alt="cart-img" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>

      {/* Hero / Featured Product */}
      <section className="hero">
        <div className="hero-heading">
          <h1>Samurai King Resting</h1>
          <button
            className="add-to-cart"
            onClick={() => console.log("Added to cart")}
          >
            ADD TO CART
          </button>
        </div>
        <article>
          <img src="/assets/Group 44 (1).png" alt="a dog" />
        </article>
      </section>

      <section className="about">
        <div className="about-details">
          <div className="about-text">
            <h3>About the Samurai King Resting</h3>
            <h3 className="about-title">Pets</h3>
            <p className="about-paragraph">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book. So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder text to mockup various fonts for a
              type specimen book. So how did the classical Latin become so
              incoherent? According to McClintock.
            </p>
          </div>
          <div className="about-content">
            <h3>People also buy</h3>
            <ul className="details-picture">
              <li>
                <img src="/assets/Rectangle 10.png" alt="details picture" />
              </li>
              <li>
                <img src="/assets/Rectangle 10.1.png" alt="details picture" />
              </li>
              <li>
                <img src="/assets/Rectangle 10.2.png" alt="details picture" />
              </li>
            </ul>
            <div className="details-text">
              <h3>Details</h3>
              <p>Size: 1020 x 1020 pixel</p>
              <p>Size: 15 mb</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="photography">
        <div className="photo-heading">
          <h2>
            Photography / <span>Premium Photos</span>
          </h2>
          <div className="photo-sort">
            <label htmlFor="sort">↥↧ Sort By</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Price</option>
              <option>Name</option>
              <option>Category</option>
            </select>
          </div>
        </div>

        <div className="photo-sec">
          <aside className="photo-categories">
            <div className="filter category-filter">
              <h3>Category</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.people}
                    onChange={() => handleCategoryChange("people")}
                  />{" "}
                  People
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.premium}
                    onChange={() => handleCategoryChange("premium")}
                  />{" "}
                  Premium
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.pets}
                    onChange={() => handleCategoryChange("pets")}
                  />{" "}
                  Pets
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.food}
                    onChange={() => handleCategoryChange("food")}
                  />{" "}
                  Food
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.landmarks}
                    onChange={() => handleCategoryChange("landmarks")}
                  />{" "}
                  Landmarks
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.cities}
                    onChange={() => handleCategoryChange("cities")}
                  />{" "}
                  Cities
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={categoryFilters.nature}
                    onChange={() => handleCategoryChange("nature")}
                  />{" "}
                  Nature
                </li>
              </ul>
            </div>
            <div className="filter price-filter">
              <h3>Price Range</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={priceFilters.under20}
                    onChange={() => handlePriceChange("under20")}
                  />{" "}
                  Lower than $20
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={priceFilters.from20to100}
                    onChange={() => handlePriceChange("from20to100")}
                  />{" "}
                  $20 - $100
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={priceFilters.from100to200}
                    onChange={() => handlePriceChange("from100to200")}
                  />{" "}
                  $100 - $200
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={priceFilters.over200}
                    onChange={() => handlePriceChange("over200")}
                  />{" "}
                  More than $200
                </li>
              </ul>
            </div>
          </aside>

          <div className="photos">
            {photoItems.map((item) => (
              <div key={item.id} className="img-info">
                <div className={`cat-img ${item.isBest ? "best" : ""}`}>
                  <img src={item.image} alt="images" />
                </div>
                <p className="img-cat">{item.category}</p>
                <p className="img-head">{item.title}</p>
                <p className="price">
                  <span className="dollar">$</span>
                  {item.price}
                </p>
              </div>
            ))}

            <nav className="pagination">
              <button className="navigate arrow">&lt;</button>
              <button className="navigate">1</button>
              <button className="navigate">2</button>
              <button className="navigate active">3</button>
              <button className="navigate">4</button>
              <button className="navigate arrow">&gt;</button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographyWebsite;
