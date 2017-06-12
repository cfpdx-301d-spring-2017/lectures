const answers = require('./practice-answers');

const petOwners = [
  { name: 'Jane', pets: [{animal: 'dog', name: 'Fido'}, {animal: 'dog', name: 'Faith'}, {animal: 'dog', name: 'Gary'}] },
  { name: 'Hannah', pets: [{animal: 'fish', name: 'Izzy'}] },
  { name: 'Harold', pets: [{animal: 'fish', name: 'Beaks'}, {animal: 'cat', name: 'James'}, {animal: 'cat', name: 'Jerry'}] },
  { name: 'Hercules', pets: [{animal: 'dog', name: 'Aladin'}, {animal: 'dog', name: 'Jasmine'}, {animal: 'cat', name: 'Abu'}] },
  { name: 'Judy', pets: [{animal: 'cat', name: 'Redd'}, {animal: 'cat', name: 'Orange'}] }
];

// TODO chain methods as needed to create an array of pet objects
const allPets = petOwners.map( owner => owner.pets ).reduce( (acc, curr) => acc.concat( curr ) );
console.log( 'allPets test passes: ', answers.compareArrs( allPets, answers['allPets'] ) );

// TODO write a function that will return an array of petOwners with three pets
const hasThreePets = petOwners.filter( owner => owner.pets.length === 3 );
console.log( 'hasThreePets test passes:', answers.compareArrs( hasThreePets, answers['hasThreePets'] ) );

// TODO chain a .map and a .reduce to total the number of pets
const totalPets = petOwners.map( owner => owner.pets.length ).reduce( (acc, curr) => acc + curr );
console.log( 'totalPets test passes:', totalPets === answers['totalPets']);

// TODO chain methods to calculate how many dogs there are total
const totalDogs = petOwners.map( owner => {
        return owner.pets.filter( pet => pet.animal === 'dog' ).length;
    }).reduce( (acc, curr) => acc + curr ); 
console.log( 'totalDogs test passes:', totalDogs === answers['totalDogs']);
