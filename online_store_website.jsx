import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MaxsaleStore() {
  const products = [
    { id: 1, name: "Bluetooth Speaker", price: 1999, category: "Electronics" },
    { id: 2, name: "Wireless Headphones", price: 2999, category: "Electronics" },
    { id: 3, name: "Men's Casual T-Shirt", price: 799, category: "Clothes" },
    { id: 4, name: "Beauty Cream", price: 499, category: "Beauty" },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🛒 Maxsale</h1>
        <span className="font-semibold">Cart: {cart.length} items</span>
      </header>

      <h2 className="text-xl font-semibold mb-4">Shop Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="mt-2 font-bold">₹{product.price}</p>
              <Button className="mt-4 w-full" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">🧾 Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Button className="mt-4 w-full">Proceed to Checkout</Button>
          </>
        )}
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Maxsale. All rights reserved.
      </footer>
    </div>
  );
}
