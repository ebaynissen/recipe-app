import { Recipe } from "./Recipe.js";

export const cookbook = [
    new Recipe(
      "Carbonara",  "Ebbe",
      {"Pasta" : {amount:400, unit:"gram"}, "Eggs": { amount:2, unit:"pieces"}, "Bacon" : {amount:100, unit:"gram"}, "Cheese" : {amount:100 , unit:"gram"}}, 
      "30", 
      "Very good carbonara", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"], false, 2
    ), 
    new Recipe(
      "Pruttpannkakor", "Lukas",
      {"Pasta" : {amount:500, unit:"gram"}, "Eggs": { amount:4, unit:"pieces"}, "Milk" : {amount:200, unit:"gram"}, "Farts" : {amount:200 , unit:"megatons"}}, 
      "30", 
      "Very good carbonara2", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce2", "Assemble", "Profit"], false, 4
    ),
    new Recipe(/* Empty Test */)
]