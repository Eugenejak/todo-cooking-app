import { useState } from "react";
import { useMeals } from "../contexts/SaveContext";
import Save from "../pages/Save";
import { Button, Card, Col } from "react-bootstrap";

function RecipeDesc({ meal, removeMeal }) {
    const [showFull, setShowFull] = useState(false);
    const instructions = meal.strInstructions || "";

    return (
        <Col key={meal.idMeal} xs={12} md={6} lg={4}>
            <Card className="mb-3">
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Card.Text>
                        {showFull ? instructions : instructions.substring(0, 150)};
                        {instructions.length > 150 && (
                            <Button
                                variant="link"
                                onClick={() => setShowFull(!showFull)}
                                className="p-0 ms-2"
                            >
                                {showFull ? "Show Less" : "Show More"}
                            </Button>
                        )}
                    </Card.Text>
                    <Button onClick={() => removeMeal(meal.idMeal)}>
                        Remove
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function MealsPage() {
    const { savedMeals, addMeal, removeMeal } = useMeals();

    return (
        <div className="container my-4">
            <Save onSave={addMeal} />

            <h3 className="mb-3">Saved Meals</h3>
            {savedMeals.length === 0 ? (
                <p>Meal not found.</p>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-3">
                    {savedMeals.map((meal) => (
                        <RecipeDesc key={meal.idMeal} meal={meal} removeMeal={removeMeal} />
                    ))}
                </Row>
            )}
        </div>
    );
}