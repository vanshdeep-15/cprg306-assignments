"use client";
import { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];
  
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
      } else {
        setMeals([]);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-gray-600">Select an item to see meal ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-600">No meal ideas found for {ingredient}</p>
      ) : (
        <div>
          <p className="text-gray-700 mb-4">Meal ideas for {ingredient}:</p>
          <ul className="space-y-2 max-h-96 overflow-y-auto">
            {meals.map((meal) => (
              <li key={meal.idMeal} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                <div className="font-medium text-gray-800">{meal.strMeal}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}