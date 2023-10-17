{/* 
Generate a components which allows the user to search for a food item and return food facts about it
using the openfoodfacts API.
*/}
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function OpenFoodFacts() {
    const [foodItem, setFoodItem] = useState("Orange");
    const [foodData, setFoodData] = useState("");

    const fetchFoodFacts = async (food) => {
        setFoodItem(food);
        const foodData = await fetch(`https://world.openfoodfacts.org/api/v2/search?categories_tags_en=${food}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.products[0].nutriscore_data);
                setFoodData(data.products[0].nutriscore_data.energy);
                return data;
            }
                
            ).catch(error => {
                console.log(error);
            });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Open Food Facts</h1>
                    <p>Search for a food item to get its description</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="text" value={foodItem} onChange={(e) => setFoodItem(e.target.value)} />
                    <button onClick={() => fetchFoodFacts(foodItem)}>Search</button>
                </Col>
            </Row>
            <Row>
                <Col className="m-4">
                    {foodData}
                </Col>
            </Row>
        </Container>
    )
    }