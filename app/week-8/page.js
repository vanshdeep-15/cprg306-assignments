"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing size, units, and emojis
    const cleanedName = itemName
      .split(',')[0]  // Remove everything after comma (size/units)
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')  // Remove emojis
      .replace(/[^\w\s]/gi, '')  // Remove any remaining special characters
      .trim()  // Remove extra spaces
      .toLowerCase();  // Convert to lowercase for better API matching
    
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping List</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Shopping List Components */}
          <div className="lg:w-2/3 space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          
          {/* Right Column - Meal Ideas */}
          <div className="lg:w-1/3">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}