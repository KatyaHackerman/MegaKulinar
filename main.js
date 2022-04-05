function addRecipe(){
  console.log("кнопка добавить рецепт нажата"); 
  let recipe = document.createElement('div');
  let nameRecipe = document.createElement('input');
  let title = document.createTextNode("Название рецепта");
  let buttonThatAddsAnIngredientRecipe = document.createElement('button');
  buttonThatAddsAnIngredientRecipe.innerHTML = "Добавить ингридиент";
  buttonThatAddsAnIngredientRecipe.onclick = addIngridient;
  recipe.appendChild(title);
  recipe.appendChild(nameRecipe);
  recipe.appendChild(buttonThatAddsAnIngredientRecipe);
  recipe.classList.add('recipecss');
  document.body.appendChild(recipe);
}
function count(){
    console.log("кнопка подсчет нажата");
    let ingridientList = [];
    let recipes = document.querySelectorAll('.recipecss');
    console.log(`найдено рецептов:${recipes.length}шт`);
    for(rec of recipes){
      let ingridients = rec.querySelectorAll('.ingridientcss');
      console.log(`найдено ингредиентов ${ingridients.length}шт`);
      for(ing of ingridients){
        let ingName = ing.querySelector('.ingnamecss');
        let ingCuont = ing.querySelector('.numbercss');
        console.log(`${ingName.value}=${ingCuont.value}`);
        let ingInList = ingridientList.find(x => x.name == ingName.value);
        if(ingInList)//лямда функция как параметр 
        {
          ingInList.number += parseInt(ingCuont.value);
        }
        else{
          let total = {name:ingName.value, number:parseInt(ingCuont.value)};
          ingridientList.push(total);
        }
      }
    }
    printResuit(ingridientList);
}
function addIngridient(event){
  console.log("кнопка дабавить ингридиент");
  let ingridient = document.createElement('div');
  let nameIngridient = document.createElement('input');
  nameIngridient.classList.add('ingnamecss');
  let recipe = event.currentTarget.parentNode;
  let title = document.createTextNode('Ингридиент');
  let numberInput = document.createElement('input');
  numberInput.classList.add('numbercss');
  let numberName = document.createTextNode('Количество');
  ingridient.appendChild(title);
  ingridient.appendChild(nameIngridient);
  ingridient.appendChild(numberName);
  ingridient.appendChild(numberInput);
  ingridient.classList.add('ingridientcss');
  recipe.appendChild(ingridient); 
}
function printResuit(ingridientList){
  let div = document.createElement('div');
  for(ing of ingridientList){
    let totalText = document.createTextNode(`${ing.name} = ${ing.number}`);
    div.appendChild(totalText);
  }
document.body.appendChild(div);
}

