// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

function makeIngredientList(ingredients) {
  return ingredients.map(ingredient => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");
    // console.log(ingredientItem);
    return ingredientItem;
    // 
  
  });
 
 
};

const ingredientsItems = makeIngredientList(ingredients);
//  console.log(ingredientsItems);
 ingredientsList.append(...ingredientsItems);


