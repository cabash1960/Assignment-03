import React from "react";
import "../index.css"; // keep your CSS import

function HeroProduct({
  title = "Samurai King Resting",
  imageSrc = "src/assets/images/Group 44 (1).png",
  description = "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part ofCicero's De Finibus in order to provide placeholder text to mockupvarious fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.",
  size = "1020 x 1020",
  category = "Pets",
}) {
  const productImg = [
    "src/assets/images/Rectangle 10.png",
    "src/assets/images/Rectangle 10.1.png",
    "src/assets/images/Rectangle 10.2.png",
  ];
  return (
    <div>
      <section className="hero">
        <div className="hero-heading">
          <h1>{title}</h1>
          <a href="#" className="add-to-cart responsive-cart">
            ADD TO CART
          </a>
        </div>

        <figure>
          <img src={imageSrc} alt={title} />
        </figure>
      </section>

      <section className="about">
        <div className="about-details">
          <div className="about-text">
            <h3>About {title}</h3>
            <h3 className="about-title">{category}</h3>
            <p className="about-paragraph">{description}</p>
          </div>

          <aside className="about-content">
            <h3>People also buy</h3>
            <ul className="details-picture">
              {productImg.map((img, index) => (
                <li key={index}>
                  <img src={img} alt={`Product image ${index + 1}`} />
                </li>
              ))}
            </ul>

            <div className="details-text">
              <h3>Details</h3>
              <p>Size: {size} pixel</p>
              <p>Size: 15 mb</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default HeroProduct;
