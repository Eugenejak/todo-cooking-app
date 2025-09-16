import { useMeals } from "../contexts/SaveContext";
import Save from "../pages/Save";

export default function MealsPage() {
    const { addMeal } = useMeals();

    return <Save onSave={addMeal} />;
}