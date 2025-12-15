"use client";
import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useAuth } from '../_utils/auth-context';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user, firebaseSignOut } = useAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [loading, setLoading] = useState(true);

  // Load items from Firestore
  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        setLoading(true);
        const userItems = await getItems(user.uid);
        setItems(userItems);
        setLoading(false);
      }
    };

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const itemId = await addItem(user.uid, newItem);
      if (itemId) {
        setItems(prevItems => [...prevItems, { ...newItem, id: itemId }]);
      }
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (user) {
      const success = await deleteItem(user.uid, itemId);
      if (success) {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      }
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .replace(/[^\w\s]/gi, '')
      .trim()
      .toLowerCase();
    
    setSelectedItemName(cleanedName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Protect the page - don't render if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please sign in to access the shopping list</p>
          <a href="/week-10" className="text-blue-500 hover:text-blue-700 underline">
            Go to Login Page
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-xl">Loading your shopping list...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Shopping List</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.displayName} ({user.email})</span>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList 
              items={items} 
              onItemSelect={handleItemSelect} 
              onDeleteItem={handleDeleteItem} 
            />
          </div>
          <div className="lg:w-1/3">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}