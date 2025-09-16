import { useState } from "react";

export default function Save({ onSave }) {
    const [mealSearch, setMealSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`);
        const data = await response.json();
        setRecipes(data.meals || []);
    }

    return (
        <div>
            <h2>Search for Meals</h2>
            <input
                type="text"
                placeholder="Search for a meal..."
                value={mealSearch}
                onChange={(e) => setMealSearch(e.target.value)}
            />
            <button onClick={fetchRecipes}>Search</button>
            <ul>
                {recipes.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                        <button onClick={() => onSave(meal)}>Save
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    );
}