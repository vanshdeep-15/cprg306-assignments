"use client";
import { useState } from 'react';

export default function NewItem() {
  // State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Increment/Decrement functions (from Week 4)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create item object
    const item = {
      name: name,
      quantity: quantity,
      category: category
    };
    
    // Log to console
    console.log(item);
    
    // Display alert
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Add New Item</h2>
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Enter item name"
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Quantity
          </label>
          <div className="flex items-center justify-between">
            <button 
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                quantity === 1 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              -
            </button>
            
            <span className="text-xl font-bold mx-4 min-w-8 text-center text-gray-900">
              {quantity}
            </span>
            
            <button 
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                quantity === 20 
                  ? 'bg-blue-800 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-medium"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}