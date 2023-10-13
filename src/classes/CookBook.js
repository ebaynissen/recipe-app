import { Recipe } from "./Recipe.js";

export const cookbook = [
    new Recipe(
      "Carbonara",  "Ebbe",
      {"Pasta" : {amount:400, unit:"grams"}, "Eggs": { amount:2, unit:"pieces"}, "Bacon" : {amount:100, unit:"grams"}, "Cheese" : {amount:100 , unit:"grams"}}, 
      "30", 
      "Very good carbonara", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"], false, 2, {"Filling": true, "Tasty": true}
    ), 
    new Recipe(
      "Pruttpannkakor", "Lukas",
      {"Eggs": { amount:4, unit:"pieces"}, "Milk" : {amount:200, unit:"grams"}, Flour : {amount: 100, unit:"grams"} ,"Farts" : {amount:200 , unit:"megatons"}}, 
      "30", 
      "Very good carbonara2", 
      ["Mix", "Fry", "Fart"], false, 4, {"Smelly": true, "Tasty": false}
    ),
    new Recipe(/* Empty Test */)
]