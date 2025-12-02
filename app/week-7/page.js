"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping List</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <div className="lg:w-2/3">
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </main>
  );
}