const maximumFitness = 10;
let initialAge = 0;
let initialHunger = 0;

function Pet (name) {
    this.name = name; 
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = maximumFitness;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= maximumFitness ) {
        this.fitness += 4;
    }
    else { 
        this.fitness = maximumFitness;
    }
};

module.exports = Pet;