import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

export default function Save({ onSave }) {
    const [mealSearch, setMealSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`);
        const data = await response.json();
        setRecipes(data.meals || []);
    }

    function handleSave(meal) {
        onSave(meal);
        setRecipes([]);
        setMealSearch("");
    }

    return (
        <div className="my-2">
            <h2>Search for Meals</h2>
            <Form className="d-flex mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search for a meal..."
                    value={mealSearch}
                    onChange={(e) => setMealSearch(e.target.value)}
                />
                <button onClick={fetchRecipes}>Search</button>
            </Form>

            <Row xs={1} md={2} lg={3} className="g-3">
                {recipes.map((meal) => (
                    <Col key={meal.idMeal}>
                        <Card>
                            <Card.Img variant="top" src={meal.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{meal.strMeal}</Card.Title>
                                <Button onClick={() => handleSave(meal)}>
                                    Save
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
}