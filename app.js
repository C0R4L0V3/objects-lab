const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
console.dir(pokemon, { maxArrayLength: null })



console.log(pokemon[58].name) //<<--- output Arcanine





//   In this lab, we’re using a method you might be unfamiliar with: console.dir(). We’re using it here so that you can see all of the Pokemon in the console. Normally, both console.dir() and console.log() show only the first 100 items in an array. However, by using { maxArrayLength: null } with console.dir(), we can display every item in the array. This specific option isn’t available with console.log(), making console.dir() the necessary choice for the full visibility needed in this lab.

// Take note of the shape of the data here. Each Pokemon object in the array has the following properties:

// Number: A number between 1 and 151.
// Name: A string representing the Pokémon’s name.
// Type: A string indicating the Pokémon’s type.
// HP (Hit Points): A numerical value representing the Pokémon’s health.
// Starter: A boolean indicating whether the Pokémon is a starter.

console.log(game);


//=============================================================================



console.log()
console.log("Exercise 3")
console.log()
/* 1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty = "easy"

console.log(game);

//=====================================================================================================================

console.log()
console.log("Exercise 4")
console.log()
/*1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?



Solve Exercise 4 here:
*/

//========REFRENCE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

console.log(pokemon[6].name) //<<--- pokemon I want to target ie Squirtle

//const starterPokemon = [] //<<<---array for starter Pokemone only!

//=====================
// pokemon.forEach(function(arrayElement, arrayIndex){
//   console.log(`[${arrayIndex}] = ${arrayElement.starter}`) // <<--- arrayElement.starters give me the value of the object property
    // for (arrayElement = 0; arrayElement <= pokemon.length; arrayElement++){ //---hoping this works! didn't work, maybe I need to comment out the first part?
    //   console.log(arrayElement.starter)  
    //     if(arrayElement.starter === true){
    //       starterPokemon.push(arrayElement) 
    //     }
    // }
    // if (arrayElement.starter === true)
// })

//for (const property in arrayElement)//---- shows if the value on the object is true! but is looping x5 and adding the starting pokemon x5 I
// consol.log(`${property}: ${arrayElement[property]}`) //---- shows all object properties! we are getting closer!
//=====================

// for(i = 0; i <= pokemon.length; i++){
//   // console.log(pokemon[i].starter)
//     if(pokemon[i] === true){
//       starterPokemon.push(pokemon)
//     }
// }
//=====================

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// pokemon.forEach((starterMon) =>{
//   if(starterMon.starter === true){
//     console.log(starterMon)                   //<<<---- this should work! FINALLY I got the all the starters in just an array!
//     starterPokemon.push(starterMon)
//     //       starterPokemon.push(pokemon)
//   };
// });

// console.log(starterPokemon)

// console.log(starterPokemon.length)

// // !!! Now to choose squirtle!!!

// starterPokemon.forEach((starterMon) => {  //<<-- i should be able to reuse starterMon without errors as its only scoped in the function
//   if (starterMon.name === "Squirtle"){
//     console.log(starterMon)
//     game.party.push(starterMon)
//     console.log('SQUIRTLE I CHOOSE YOU!!!');
    
//   };
// });
//Going to condense this code!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

pokemon.forEach((starterMon) => {
  if(starterMon.starter === true && starterMon.name === "Squirtle"){
    game.party.push(starterMon)


    console.log('SQUIRTLE I CHOOSE YOU!!!');
  }
});


console.log(game.party)
console.log(game.party.length)

//======================================================================================================================

console.log();
console.log("Exercise 5");
console.log();
/*1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

//lets figure out which pokemone I want first

/*Rhyhorn is a great pokemon, it is a great ground type as it can actually use both electric attack and surf when it evolves to Rhydon! 
Which givie it advantage on types its typicall weak to! (OS red and blue edition)
its a ground type with 80 hp, lets make sure no others pokemone have these same two properties
*/

pokemon.forEach((iChooseYou) => {

  if (iChooseYou.type === "ground" && iChooseYou.hp === 80){
    console.log(iChooseYou) //<<-- perfect no other matches, only outputs ryhorn!
    game.party.push(iChooseYou)
    console.log(`I cuaght Rhyhorn! Rhydon, Rhydon, Rhydon! `) //<--- puns :D
  } 
  if (iChooseYou.type === "psychic" && iChooseYou.hp === 100){   //<<<---- next im going to target Mew, a psychic type, always my favorite when i was a kid!
    console.log(iChooseYou)
    game.party.push(iChooseYou)
    console.log(`I cuaght the Legendary Mew!`) 
  }                                                     
  if (iChooseYou.type === "fighting" && iChooseYou.hp === 50 && iChooseYou.number === 107){  //<<<<---- now we want hitmonchan! a fighting type that can get elemental punch skills!
    console.log(iChooseYou) //<--- oh no! looks like Hitmonchan shares the same type and hp as Hitmonlee! guess we will add a number condition on its pokedex index! // there we got we cuaght Hitmonchan!
    game.party.push(iChooseYou)
    console.log(`I caught Hitmonchan, Fist's of Furry!`)
  } 
    
});

console.log(game.party); //<--- Squirtle, Hitmoncha, Rhyhorn and Mew, are now in my party!
 
//=========================================================================================================================

console.log();
console.log("Exercise 6");
console.log();
/*1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach((gymBeaten) => {
  // for (let gymComplete of gymBeaten) {  // <<--- I was so close! just commented this out and it worked!
    if(gymBeaten.difficulty <= 3){
      gymBeaten.completed = true         // I think this will work
    // }
  }})

console.log(game.gyms);

//========================================================================================================

console.log();
console.log("Exercise 7");
console.log();


/*1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// game.party.shift[1]

// game.party.unshift(pokemon[7]) 

// console.log(game.party) //<<---- this does not works but I wonder....


game.party.splice(0, 1, pokemon[7]); //<<---- HUZZAH!

console.log(game.party);


//==================================================================================================================

console.log();
console.log("Exercise 8");
console.log();
/* 1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/


game.party.forEach((printName) => {
      console.log(printName.name) // outputs each party members name
});

//===================================================================================================================

console.log();
console.log("Exercise 9");
console.log();
/*
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


pokemon.forEach((starterMon) =>{
    if(starterMon.starter === true){
      console.log(starterMon.name)                   //<<<---- I figured out this one when I was figuring out exercise 4!
    }
  });  

  //================================================================================================================

console.log();
console.log("Exercise 10");
console.log();
/*
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

 game.catchPokemonn = (pokemonObj) => {
          game.party.push(pokemonObj)      
 }
     
game.catchPokemonn(pokemon[32]);
console.log(game.party);

//===================================================================================================================

console.log();
console.log("Exercise 11")
console.log();

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemonn = function (pokemonObj){
  game.party.push(pokemonObj)
  game.items.forEach((minusPokeball) => {
    if (minusPokeball.name === "pokeball"){    //<<----i'm sure there is a way to simplify this
      minusPokeball.quantity -= 1
    }
  })

};

game.catchPokemonn(pokemon[58]);
console.log(game.party);
console.log(game.items);

//======================================================================================================

console.log();
console.log("Exercise 12");
console.log();

/*
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach((gymBeaten) => {
  if(gymBeaten.difficulty < 6) {
      gymBeaten.completed = true
  }
});
 console.log(game.gyms);
 
//==========================================================================================================

console.log();
console.log("Exercise 13");
console.log();

/*
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


game.gymStatus = () => {    //<<---- creating the method

  const gymTally = {
    completed: 0,           //<<<-----creating the object inside the method
    incompleted : 0,
  }
  game.gyms.forEach((gymCompleted) =>{   //<<<---- loops through the gym array
    if (gymCompleted.completed === true){   
      gymTally.completed += 1               //<<--- gyms are completed add 1 to the complete gymTally
    } else {
      gymTally.incompleted += 1             //<<---- gyms incompletes adds 1 to the incomplete gymTally
    }
  })

console.log(gymTally)  //<<----------- console logs the object gymTally
};

game.gymStatus(); //<<------- calls the game.gymstatus method/function

//================================================================================================================

console.log();
console.log("Exercise 14");
console.log();

/*
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = () => {
  console.log(game.party.length)
};

game.partyCount();

//===================================================================================================================

console.log();
console.log("Exercise 15");
console.log();

/*
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach((gymCompleted) => {
  if (gymCompleted.difficulty < 8){
    gymCompleted.completed = true
  }

});

console.log(game.gyms);

//================================================================================================================

console.log();
console.log("Exercise 16");
console.log();

/*
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);

//==================================================================================================================

console.log();
console.log("Exercise 17");
console.log();

/*
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a, b) => b.hp - a.hp)
  console.log(game.party);

//==================================================================================================================

console.log();
console.log("Exercise 18");
console.log();

/*
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection =  []

game.catchPokemonn = (pokemonObj) => {      //<<----this is from EXERCISE 11!!! NO TWELVE!
  if(game.party < 6){            //<<--- if party is less than 6, it will add the pokemon to my party
  game.party.push(pokemonObj)
  } else {                      // <<--- if party is 6, it will the pokemone to the collection
  game.collection.push(pokemonObj)
  }
game.items.forEach((minusPokeball) => {
    if (minusPokeball.name === "pokeball"){    //<<------- subtracts pokeballs
      minusPokeball.quantity -= 1
    } 
    }) 
  }

game.catchPokemonn(pokemon[27]);  //<<------ catches sandshrew
console.log(game.party);          //<<------ looks are the party line up
console.log(game.collection);     //<<------ looks at what pokemone is in storage
console.log(game.items);          //<<------looks at inventory


//==============================================================================================================

console.log();
console.log("Exercise 19")
console.log();

/*
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemonn = (pokemonObj) => {
  game.items.forEach((ballQuantity) => {            
    if (ballQuantity.name === "pokeball" && ballQuantity.quantity >= 1){   //<<----- checks to see if the player has any pokeballs FIRST!
      console.log(`You have not more pokeballs`)                          //<<--- if player has no balls, this will output
    } else {                               //<<--- else, if play has balls will continue to capture process
      if(game.party < 6){                //<<--- if party is less than 6, it will add the pokemon to my party
         game.party.push(pokemonObj)
       } else {                            // <<--- if party is 6, it will the pokemone to the collection
        game.collection.push(pokemonObj)
       }
           ballQuantity.quantity -= 1      //<<------- subtracts pokeballs
   } 
  })
}  


game.catchPokemonn(pokemon[133]);  //<<------ catches Vaporeon
console.log(game.party);          //<<------ looks are the party line up
console.log(game.collection);     //<<------ looks at what pokemone is in storage
console.log(game.items);          //<<------looks at inventory


//Catching vaporeon 3 times but only subtracts 1 ball?
// changing the value of pokeballs did not give me the 0 balls console output

// changing the ballQuantity.quantity === 0 to ballQuantity.quantity >= 1 made it capture vaporeon twice

// moving on for now, I'm not sure what I'm missing on this

//======================================================= 

console.log();
console.log("Exercise 20")
console.log()

/*

Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/




//until I can get Exercise 19 to work im going to hold off on this one for now





console.log();
console.log("Exercise 21")
console.log()

/*
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/


// Not sure if we are suppose to make this a function but i feel this would be the more practicle way to do this 

game.pokemonTypeSort = () => {     //<---- method to call a sorted type object


  const pokemonType = {
    grass: [],
    fire: [],
    water: [],
    ice: [],
    electric: [],
    ground: [],                         //<--- object for type sorting
    rock: [],
    normal: [],
    bug: [],
    poison: [],
    fairy: [],
    ghost: [],
    fighting: [],
    psychic: [],
    dragon: [],
  } 

    pokemon.forEach((monster) => {        //<<----- loops through pokemone array
      if(monster.type === "grass"){     
        pokemonType.grass.push(monster)   //<<---- pushes grass type to pokemoneType.grass array
      } 
      if (monster.type === "fire"){       
        pokemonType.fire.push(monster)    //<<---- pushes fire type to pokemoneType.fire array
      }
      if (monster.type === "water"){
        pokemonType.water.push(monster)   //<<---- pushes water type to pokemoneType.water array
      }
      if (monster.type === "ice"){
        pokemonType.ice.push(monster)     //<<---- pushes ice type to pokemoneType.ice array
      }
      if (monster.type === "electric"){ 
        pokemonType.electric.push(monster)  //<<---- pushes electric type to pokemoneType.electric array
      }
      if (monster.type === "ground"){
        pokemonType.ground.push(monster)    //<<---- pushes ground type to pokemoneType.ground rray
      }
      if (monster.type ==="rock"){
        pokemonType.rock.push(monster)    //<<---- pushes rock type to pokemoneType.rock array
      }
      if (monster.type === "normal"){
        pokemonType.normal.push(monster)  //<<---- pushes normal type to pokemoneType.normal array
      }
      if (monster.type === "bug"){
        pokemonType.bug.push(monster)   //<<---- pushes bug type to pokemoneType.bug array
      }
      if (monster.type === "poison"){
        pokemonType.poison.push(monster)    //<<---- pushes poison type to pokemoneType.poison array
      }
      if (monster.type === "fairy"){
        pokemonType.fairy.push(monster)   //<<---- pushes fairy type to pokemoneType.fairy array
      }
      if (monster.type === "ghost"){
        pokemonType.ghost.push(monster)   //<<---- pushes ghost type to pokemoneType.ghost array
      }
      if (monster.type === "fighting"){
        pokemonType.fighting.push(monster)    //<<---- pushes fighting type to pokemoneType.fighting array
      }
      if (monster.type === "psychic"){
        pokemonType.psychic.push(monster)   //<<---- pushes psychic type to pokemoneType.psychic array
      }
      if (monster.type === "dragon"){
        pokemonType.dragon.push(monster)         //<<---- pushes dragon type to pokemoneType.dragon array
      }
    })

    console.log(pokemonType)
  }
  



game.pokemonTypeSort()