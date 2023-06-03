'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartFixedBar() {
  const { cartCount, totalPrice } = useContext(CartContext);
  return (
    <div className="cart-button">
      <Link href="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
          <span className="cart-total">Total: ${totalPrice}</span>
      </Link>
    </div>
  );
}
