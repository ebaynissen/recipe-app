import { v4 as uuid } from "uuid";

/**
 * Recipe class used to store different recipes.
 * parameters keep track of relevant info such as title, author, ingredients...
 */
export class Recipe {
    id = uuid();

    constructor(
        name = "Missing title", 
        author = "unknown", 
        ingredients = {"Item": "No Ingredients" , "Amount": "", "Unit": ""}, 
        time = "0", 
        description = "Missing description", 
        steps = ["Missing Steps"], 
        unitUS = false,
        portions = 0,
        tags = {},
        image = ("./public/Images/MissingImage.jpeg") //If no image is selected use this placeholder
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
        this.image = (image);
    
    }
/**
 * Function used to get ingredients for multipler amount of portions.
 * @param {int} multiplier - amount of portions
 * @param {boolean} unitUS DEPRECATED
 * @returns ingredients after with new portion amount
 */
    getIngredients(multiplier = 1, unitUS = false) {
        let ingredients = {};
        for (let ing in this.ingredients) {
            ingredients[ing] = {
                amount: Number(((this.ingredients[ing].amount / this.portions) * multiplier).toFixed(3)),
                unit: this.ingredients[ing].unit
            }
        }
        if(unitUS){ //DEPRECATED
            /*TODO: implement conversion method using API */
        }
        return ingredients;
    }
/**
 * Function to turn normal datatstructure into a recipe object
 * @param {string or arrya} str 
 * @returns recipe object or array of recipe objects
 */
    static parse(str){
        
        const arr = JSON.parse(str);
     
        if(Array.isArray(arr)){
            return arr.map(element => { //return array of recipe objects
                const rec = new Recipe();
                rec.name = element['name'];
                rec.author = element['author'];
                rec.ingredients = element['ingredients'];
                rec.time = element['time'];
                rec.description = element['description'];
                rec.steps = element['steps'];
                rec.unitUS = element['unitUS'];
                rec.portions = element['portions'];
                rec.tags = element['tags'];
                rec.image = element['image'];
                rec.id = element.id;
                return rec;
              });        
        }
        if(typeof(str) == 'string'){
            const element = JSON.parse(str);
            const rec = new Recipe();
                rec.name = element['name'];
                rec.author = element['author'];
                rec.ingredients = element['ingredients'];
                rec.time = element['time'];
                rec.description = element['description'];
                rec.steps = element['steps'];
                rec.unitUS = element['unitUS'];
                rec.portions = element['portions'];
                rec.tags = element['tags'];
                rec.image = element['image'];
                rec.id = element.id;
                return rec;
            }
    }
}