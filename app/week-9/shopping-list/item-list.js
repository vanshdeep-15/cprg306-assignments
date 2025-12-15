"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  // Sort the items based on sortBy (using copy of items prop)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category (using copy of items prop)
  const groupedItems = [...items].reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort categories and items within categories
  const sortedCategories = Object.keys(groupedItems).sort();
  sortedCategories.forEach(category => {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setSortBy("name"); setGrouped(false); }}
          className={`px-4 py-2 border-2 rounded ${
            sortBy === "name" && !grouped
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => { setSortBy("category"); setGrouped(false); }}
          className={`px-4 py-2 border-2 rounded ${
            sortBy === "category" && !grouped
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setGrouped(true)}
          className={`px-4 py-2 border-2 rounded ${
            grouped
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Items List */}
      {!grouped ? (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          {sortedCategories.map((category) => (
            <div key={category} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold capitalize text-gray-800 mb-3">
                {category}
              </h2>
              <ul className="space-y-2">
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}