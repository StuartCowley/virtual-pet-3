const maximumFitness = 10;
let minimumAge = 0;
let minimumHunger = 0;

function Pet (name) {
    this.name = name; 
    this.age = minimumAge;
    this.hunger = minimumHunger;
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

Pet.prototype.feed = function() {
    if ((this.hunger - 3) > minimumHunger ){
        this.hunger -= 3;
    }
    else {
        this.hunger = minimumHunger;
    }
};

module.exports = Pet;