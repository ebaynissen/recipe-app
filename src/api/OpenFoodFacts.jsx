{/* 
Generate a components which allows the user to search for a food item and return food facts about it
using the openfoodfacts API.
*/}
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function OpenFoodFacts() {
    const [foodItem, setFoodItem] = useState("");
    const [foodData, setFoodData] = useState("");

    const fetchFoodFacts = async (food) => {
        const foodData = await fetch(`https://world.openfoodfacts.org/api/v2/search?categories_tags_en=${food}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.products);
                setFoodItem(data.products.filter(product => product.countries_lc === "en")[0].product_name);
                setFoodData(data.products.filter(product => product.countries_lc === "en")[0].nutriscore_data.grade.toUpperCase());
                return data;
            }
                
            ).catch(error => {
                console.log(error);
            });
        return foodData;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Open Food Facts</h2>
                    <hr />
                    <p>Search for a food item of your choice and the API will fetch the first item
                        that matches the name and return its nutritional grade.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="text" value={foodItem} onChange={(e) => setFoodItem(e.target.value)} />
                    <button onClick={() => fetchFoodFacts(foodItem)}>Search</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="my-2">Nutrition Grade: </h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    {foodItem ?? "No data"}
                </Col>
                <Col>
                    
                </Col>
                <Col>
                    <h4 className='text-danger'>{foodData ?? "F"}</h4>
                </Col>
            </Row>
        </Container>
    )
    }