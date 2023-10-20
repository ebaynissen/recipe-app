import { Row, Col, Form, Card, Button, FormLabel } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

export default function RecipePreview({ Recipe, setSelectedRecipe }) {
    return (
        <Card
            border="dark"
            className=""
            onClick={() => {
                setSelectedRecipe(Recipe);
            }}
            style={{ height: "18rem", cursor: "pointer" }}
        >
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img
                            style={{ height: "10rem", "object-fit": "cover" }}
                            variant="top"
                            src={Recipe.image}
                            alt="not found"
                            width={"80px"}
                        />
                    </Col>

                    <Col>
                        <Row>
                            <Card.Title>
                                <h1>{Recipe.name}</h1>
                            </Card.Title>
                        </Row>
                        <Row>
                            <small>
                                By: <i>{Recipe.author}</i>{" "}
                                <div className="vr mx-2"></div>Time:{" "}
                                {Recipe.time} Minutes{" "}
                                <div className="vr mx-2"></div>{" "}
                            </small>
                            <small>Portions: {Recipe.portions}</small>
                            <hr />
                            <p>{Recipe.description}</p>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
