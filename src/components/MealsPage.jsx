import { useState } from "react";
import { useMeals } from "../contexts/SaveContext";
import Save from "../pages/Save";

function RecipeDesc({ meal, removeMeal }) {
    const [showFull, setShowFull] = useState(false);
    const instructions = meal.strInstructions || "";

    return (
        <li key={meal.idMeal}>
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} width={100} />
            <p>
                {showFull ? instructions : instructions.substring(0, 150)};
                {instructions.length > 150 && (
                    <button onClick={() => setShowFull(!showFull)}>
                        {showFull ? "Show Less" : "Show More"}
                    </button>
                )}
            </p>
            <button onClick={() => removeMeal(meal.idMeal)}>Remove</button>
        </li>
    );
}

export default function MealsPage() {
    const { savedMeals, addMeal, removeMeal } = useMeals();

    return (
        <div>
            <Save onSave={addMeal} />

            <h3>Saved Meals</h3>
            <ul>
                {savedMeals.map((meal) => (
                    <RecipeDesc key={meal.idMeal} meal={meal} removeMeal={removeMeal} />
                ))}
            </ul>
        </div>
    );
}