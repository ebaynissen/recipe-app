import { v4 as uuid } from "uuid";

export class Recipe {
    id = uuid();

    constructor(
        name = "Missing title", 
        author = "unknown", 
        ingredients = {}, 
        time = "0", 
        description = "Missing description", 
        steps = ["Missing Steps"], 
        unitUS = false,
        portions = 0,
        tags = {}
    ) {
        this.name = name;
        this.author = author;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.steps = steps;
        this.unitUS = unitUS;
        this.portions = portions;
        this.tags = tags;
    }

    getIngredients(multiplier = 1, unitUS = false) {
        let ingredients = {};
        for (let ing in this.ingredients) {
            ingredients[ing] = {
                amount: (this.ingredients[ing].amount / this.portions) * multiplier,
                unit: this.ingredients[ing].unit
            }
        }
        if(unitUS){ //if we want US-units
            /*TODO: implement conversion method using API */
        }
        return ingredients;
    }
}