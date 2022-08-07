/*Will pick from list of dinners saved to know what to eat for the day
Things I will need (** = task done)
 - list of dinners **
 - function that picks from that list**
 - need to find a way to pull up ingredients from a different source?**
 - What if I try to have it plan meals for the week?  Is there a way to compile a list from the list of ingredients?  Like is there a way to have it so it to compile and combines items (2x beans)
 
 
 ***maybe this automatically gets sent as an email.  Will need to learn more about the JS stuff to find out how this works.*/



//global variables

let dishForTonight = ''

//-------------------------------------------------------------------------
/*FUNCTIONS*/

//randomlly chooses a dish from a set list
//arrays 
function pickMeal(){
 let meal1 = 'fried rice'
 let meal2 = 'hot and sour soup'
 let meal3 = 'veg. chili'
 let meal4 = 'Empanadas'
 let meal5 = 'Cereal'
 let meal6 = 'omlet'

let chosenDish = Math.floor(Math.random()*6)
//change to switch statment
 
switch (chosenDish){
  case 0:
  chosenDish = meal1
  break;
  case 1:
  chosenDish = meal2
  break;
  case 2:
  chosenDish = meal3
  break;
  case 3:
  chosenDish = meal4
  break;
  case 4:
  chosenDish = meal5
  break;
  case 5:
  chosenDish = meal6
}
 return dishForTonight = chosenDish
}

//based off chosen dish, print out ingredients from a list

function ingredients(meal){
  //list of ingredients for each dish
  let vegChiliRecipe = '2 cans of tomato sauce, 1 soyrizo, 4 cans of beans,2 onions, and mixed veggies'
  let cerealRecipe = 'Cereal and milk. Simple right?'
  let friedRiceRecipe = 'Throw some frozen veggies, soy sauce, and eggs in a pan.  It\'ll go'

  //will print out list of ingredients
  if (dishForTonight === 'veg. chili'){
    console.log(vegChiliRecipe)
  }else if (dishForTonight === 'Cereal'){
    console.log (cerealRecipe)
  }else if (dishForTonight === 'fried rice'){
    console.log (friedRiceRecipe)
  }else{
    console.log('Opps!  Doesnt look like we have the ingredients saved here yet!  We\'ll make sure to change that in the future!')
  }
}

//Maybe instead of listing off ingredients, this will send over a link to the recipe?  
//-------------------------------------------------------------------------


//Running the program

console.log('Time for dinner!  Lets pick a meal for you')
console.log()
console.log(`Alright, you'll be eating ${pickMeal()} tonight`)
console.log()
console.log('Here are the ingredients you need:')
ingredients(dishForTonight)
console.log()
console.log('Enjoy the foods.  See you next time!!!!')