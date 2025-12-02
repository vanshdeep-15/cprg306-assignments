"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-black p-6 rounded-lg shadow-md max-w-sm mx-auto mt-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Item Quantity</h2>

      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          disabled={quantity <= 1}
          className={`px-4 py-2 rounded-lg font-medium ${
            quantity <= 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          -
        </button>

        <span className="text-2xl font-bold">{quantity}</span>

        <button
          onClick={() => setQuantity(q => Math.min(20, q + 1))}
          disabled={quantity >= 20}
          className={`px-4 py-2 rounded-lg font-medium ${
            quantity >= 20
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Current quantity: <span className="font-semibold">{quantity}</span>
      </p>
    </div>
  );
}
