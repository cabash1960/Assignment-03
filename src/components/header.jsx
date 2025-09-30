import React from "react";
import "../index.css";

function Header() {
  return (
    <header>
      <div class="nav">
        <img src="src/assets/images/Group 12.png" alt="logo" />
        <nav class="nav-links">
          <ul>
            <li>
              <a href="#">
                <img src="src/assets/images/Group 3.1.png" alt="cart-img" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
