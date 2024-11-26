'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Ornate Metal Gate', price: 1299.99, image: '/assets/img/portfolio/1.jpg' },
  { id: 2, name: 'Custom Metal Sculpture', price: 799.99, image: '/assets/img/portfolio/2.jpg' },
  { id: 3, name: 'Wrought Iron Railing', price: 599.99, image: '/assets/img/portfolio/3.jpg' },
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
    setProducts(prevProducts => prevProducts.filter(item => item.id !== product.id));
  };

  const removeFromCart = (productId: number) => {
    const productToRemove = cart.find(item => item.id === productId);
    if (productToRemove) {
      setProducts(prevProducts => [...prevProducts, productToRemove]);
    }
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Shop Our Metalwork</h1>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Section */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
                <span className="text-lg">{item.name} - ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 text-xl font-bold">
              Total: ${getTotalPrice()}
            </div>
            <button
              onClick={() => {
                if (cart.length > 0) {
                  alert('Thank you for your purchase! (This is a demo - no actual purchase was made)');
                  setCart([]);
                  setProducts(initialProducts);
                }
              }}
              disabled={cart.length === 0}
              className={`mt-6 w-full px-6 py-3 rounded-md text-lg font-semibold transition-colors ${
                cart.length === 0
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}