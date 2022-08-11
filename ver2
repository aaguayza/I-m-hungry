/*Will pick from list of dinners saved to know what to eat for the day
Things I will need (** = task done)
 - list of dinners **
 - function that picks from that list**
 - need to find a way to pull up ingredients from a different source?**
 - What if I try to have it plan meals for the week?  Is there a way to compile a list from the list of ingredients?  Like is there a way to have it so it to compile and combines items (2x beans)
 - consider using the .push method when wanting to start adding ingredients to a 'grocery list'
  -use docs to learn more about array methods that could be useful to this app
  -slice method might be the way to go when taking from a list of items and adding it to another list.  
 
 ***maybe this automatically gets sent as an email.  Will need to learn more about the JS stuff to find out how this works.*/



//global variables

let dishForTonight = ''

//-------------------------------------------------------------------------
/*FUNCTIONS*/


function pickMeal(){

const meals = ['fried rice', 'hot and sour soup', 'veg chili', 'Empanadas', 'Cereal', 'omlet']
let chosenDish = Math.floor(Math.random()*6)
 
switch (chosenDish){
  case 0:
  chosenDish = meals[0]
  break;
  case 1:
  chosenDish = meals[1]
  break;
  case 2:
  chosenDish = meals[2]
  break;
  case 3:
  chosenDish = meals[3]
  break;
  case 4:
  chosenDish = meals[4]
  break;
  case 5:
  chosenDish = meals[5]
}
 return dishForTonight = chosenDish
}

//based off chosen dish, print out ingredients from a list

function ingredients(meal){
  const vegChiliRecipe = ['2 cans of tomato sauce ', '1 soyrizo ', '4 cans of beans ', '2 onions ', 'mixed veggies ']
  const cerealRecipe = ['Cereal ', 'milk ']
  const friedRiceRecipe = ['frozen veggies ', 'soy sauce ', 'eggs ']



  //will print out list of ingredients
  //consider using a for loop to list off the ingredients!!!!!  This will allow the ingredients to be listed off in a stright list as opposed to them all being in one line or with the brackets and commas sill being there
  
  switch (meal){
    case 'veg chili':
    console.log(vegChiliRecipe.join())
    break;
    case 'Cereal':
    console.log (cerealRecipe.join())
    break;
    case 'fried rice':
    console.log (friedRiceRecipe.join())
    break;
    default:
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
