const minimumFitness = 0;
const maximumFitness = 10;
const minimumAge = 0;
const maximumAge = 30;
const minimumHunger = 0;
const maximumHunger = 10;

function Pet (name) {
    this.name = name; 
    this.age = minimumAge;
    this.hunger = minimumHunger;
    this.fitness = maximumFitness;
};

Pet.prototype = {
    get isAlive(){
        return this.age < maximumAge && this.hunger < maximumHunger && this.fitness > minimumFitness;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.fitness + 4) <= maximumFitness ) {
        this.fitness += 4;
    }
    else { 
        this.fitness = maximumFitness;
    };
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.hunger - 3) > minimumHunger ){
        this.hunger -= 3;
    }
    else {
        this.hunger = minimumHunger;
    };
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.fitness <=3 && this.hunger >= 5) {
        return 'I need a walk AND I am hungry';
    }
    else if (this.fitness <= 3) {
        return 'I need a walk';
    }
   else if (this.hunger >= 5) {
        return 'I am hungry';
    }
    else {
        return 'I feel great';
    }
};

module.exports = Pet;