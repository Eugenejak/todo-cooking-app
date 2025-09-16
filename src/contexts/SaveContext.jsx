import { createContext, useContext, useState } from "react";

const SaveContext = createContext();

export function SaveProvider({ children }) {
    const [savedMeals, setSavedMeals] = useState([]);

    function addMeal(meal) {
        setSavedMeals((prev) => {
            if (prev.find((m) => m.idMeal === meal.idMeal))
                return prev;
            return [...prev, meal]
        });
    }

    function removeMeal(id) {
        setSavedMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
    }

    return (
        <SaveContext.Provider value={{ savedMeals, addMeal, removeMeal }}>
            {children}
        </SaveContext.Provider>
    );
}

export function useMeals() {
    return useContext(SaveContext);
}