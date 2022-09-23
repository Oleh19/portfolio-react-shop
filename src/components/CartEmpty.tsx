import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/image/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Your cart is empty <span>😕</span>
    </h2>
    <p>
      You have not chosen a product yet
      <br />
      To order pizza, go to the main page.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Back</span>
    </Link>
  </div>
);
