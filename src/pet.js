const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

const birthday = 1; // adds one year to age
const meal = 5; // adds 5+ to hunger level when grows up
const fitloss = 3; // decreases fitness by 3 when grows up
const walked = 4; // increases fitness by 4 when walk() invoked
const fed = 3; // decreases hunger by 3 when feed() invoked

const errorMsg = 'Your pet is no longer alive :(';

function Pet (name) {
    this.name = name; 
    this.age = minAge;
    this.hunger = minHunger;
    this.fitness = maxFitness;
};

Pet.prototype = {
    get isAlive(){
        return this.age < maxAge && this.hunger < maxHunger && this.fitness > minFitness;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error(errorMsg);
      }
    this.age += birthday;
    this.hunger += meal;
    this.fitness -= fitloss;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error(errorMsg);
      }
    if ((this.fitness + walked) <= maxFitness ) {
        this.fitness += walked;
    }
    else { 
        this.fitness = maxFitness;
    };
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error(errorMsg);
      }
    if ((this.hunger - fed) > minHunger ){
        this.hunger -= fed;
    }
    else {
        this.hunger = minHunger;
    };
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error(errorMsg);
      }
    if (this.fitness <=fitloss && this.hunger >= meal) {
        return 'I need a walk AND I am hungry';
    }
    else if (this.fitness <= fitloss) {
        return 'I need a walk';
    }
   else if (this.hunger >= meal) {
        return 'I am hungry';
    }
    else {
        return 'I feel great';
    }
};

module.exports = Pet;