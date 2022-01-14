const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

const yearIncrement = 1; // adds one year to age
const hungerIncrement = 5; // adds 5+ to hunger level when grows up
const fitnessDecrement = 3; // decreases fitness by 3 when grows up
const fitnessIncrement = 4; // increases fitness by 4 when walk() invoked
const hungerDecrement = 3; // decreases hunger by 3 when feed() invoked

const errorMsg = 'Your pet is no longer alive :(';

function Pet (name) {
  this.name = name; 
  this.age = minAge;
  this.hunger = minHunger;
  this.fitness = maxFitness;
  this.children = [];
};

Pet.prototype = {
  get isAlive(){
    return this.age < maxAge 
    && this.hunger < maxHunger 
    && this.fitness > minFitness;
  }
}

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error(errorMsg);
    }
  this.age += yearIncrement;
  this.hunger += hungerIncrement;
  this.fitness -= fitnessDecrement;
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(errorMsg);
  }
  this.fitness = Math.min((this.fitness + fitnessIncrement), maxFitness)
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(errorMsg);
  }
  this.hunger = Math.max((this.hunger - hungerDecrement), minHunger)
};

Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    throw new Error(errorMsg);
  }
  if (this.fitness <= fitnessDecrement && this.hunger >= hungerIncrement) {
    return 'I need a walk AND I am hungry';
  }
  else if (this.fitness <= fitnessDecrement) {
    return 'I need a walk';
  }
  else if (this.hunger >= hungerIncrement) {
    return 'I am hungry';
  }
  else {
    return 'I feel great';
  }
};

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
};

Pet.prototype.haveBaby = function (child) {
  this.children.push(new Pet (child));
}

module.exports = Pet;