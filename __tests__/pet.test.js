const Pet = require('../src/pet');

const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

const yearIncrement = 1; // adds one year to age
const hungerIncrement = 5; // adds 5+ to hunger level when grows up

const errorMsg = 'Your pet is no longer alive :(';
const walkMsg = 'I need a walk'
const hungryMsg = 'I am hungry'
const greatMsg = 'I feel great'

describe('constructor', () => {
  let pet;
  beforeEach(() => {
   pet = new Pet('Jessie');
  });
    it('returns an object', () => {
      expect(new Pet('Jessie')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      expect(pet.name).toEqual('Jessie');
    });
    it('has an initial age of 0', () => {
      expect(pet.age).toEqual(minAge);
    });
    it('has an initial hunger of 0', () => {
     expect(pet.hunger).toEqual(minHunger);
    });
    it('has initial fitness of 10', () => {
      expect(pet.fitness).toEqual(maxFitness);
    });
  });

  describe('growUp', () => {
    let pet;
    beforeEach(() => {
     pet = new Pet('Jessie');
    });
    it('increments the age by 1', () => {
      pet.growUp();
      expect(pet.age).toEqual(yearIncrement);
    });
    it('increments the hunger by 5', () => {
      pet.growUp();
      expect(pet.hunger).toEqual(hungerIncrement);
    });
    it('decreases the fitness by 3', () => {
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = maxAge;
      expect(() => pet.growUp()).toThrow(errorMsg);
    });
  });

  describe('walk', () => {
    let pet;
    beforeEach(() => {
     pet = new Pet('Jessie');
    });
    it('increments the fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(maxFitness);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = maxAge;
      expect(() => pet.walk()).toThrow(errorMsg);
    });
  });

  describe('feed', () => {
    let pet;
    beforeEach(() => {
     pet = new Pet('Jessie');
    });
    it('decreases hunger by 3', () => {
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger to a minimum of 0', () => {
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(minHunger);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = maxAge;
      expect(() => pet.feed()).toThrow(errorMsg);
    });
  });

  describe('checkUp', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Jessie');
    });
    it(`returns '${walkMsg}' if pets fitness is 3 or less`, () => {
      pet.fitness = 3;
      pet.checkUp();
      expect(pet.checkUp()).toEqual(walkMsg)
    });
    it(`returns '${walkMsg}' if pets fitness is 1`, () => {
      pet.fitness = 1;
      pet.checkUp();
      expect(pet.checkUp()).toEqual(walkMsg)
    });
    it(`returns '${hungryMsg}' if pets hunger is 5 or more`, () => {
      pet.hunger = 5;
      pet.checkUp();
      expect(pet.checkUp()).toEqual(hungryMsg);
    });
    it(`returns '${hungryMsg}' if pets hunger is 9`, () => {
      pet.hunger = 9;
      pet.checkUp();
      expect(pet.checkUp()).toEqual(hungryMsg);
    });
    it(`returns '${walkMsg}' AND '${hungryMsg}' if fitness is 3 or less and its hunger is 5 or more`, () => {
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual(`${walkMsg} AND ${hungryMsg}`);
    });
    it(`returns '${walkMsg}' AND '${hungryMsg}' if fitness is 1 and its hunger is 8`, () => {
      pet.fitness = 1;
      pet.hunger = 8;
      expect(pet.checkUp()).toEqual(`${walkMsg} AND ${hungryMsg}`);
    });
    it(`returns '${greatMsg}' if pets fitness is 4 or above and its hunger is 4 or less`, () => {
      pet.fitness = 4;
      pet.hunger = 4;
      expect(pet.checkUp()).toEqual(greatMsg);
    });
    it(`returns '${greatMsg}' if pets fitness is 7 and its hunger is 2`, () => {
      pet.fitness = 7;
      pet.hunger = 2;
      expect(pet.checkUp()).toEqual(greatMsg);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow(errorMsg);
    });
  });

  describe('isAlive', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Jessie');
    });
    it('returns false if fitness is 0 or less', () => {
      pet.fitness = minFitness;
      expect(pet.isAlive).toBe(false);
    });
    it('returns false if hunger is 10 or more', () => {
      pet.hunger = maxHunger;
      expect(pet.isAlive).toBe(false);
    });
    it('returns false if pet age is 30 or more', () => {
      pet.age = maxAge;
      expect(pet.isAlive).toBe(false);
    });
    it('returns true if pet fitness is 1 or above, hunger is 9 or less, age is under 30', () => {
      pet.fitness = 1;
      pet.hunger = 9;
      pet.age = 29;
      expect(pet.isAlive).toBe(true);
    });
  });

  describe('adoptChild', () => {
    let parent;
    let child;
    beforeEach(() => {
      parent = new Pet('Jessie');
      child = new Pet('Nima');

      parent.adoptChild(child);
    });
    it('adds child to parent property', () => {
      expect(parent.children[0]).toBeInstanceOf(Pet);
    });
    it('checks that child is being fed', () => {
      parent.children[0].hunger = 6;
      parent.children[0].feed();
      expect(parent.children[0].hunger).toEqual(3);
    });
    it('checks that child grows up', () => {
      parent.children[0].age = yearIncrement;
      parent.children[0].growUp();
      expect(parent.children[0].age).toEqual(2);
    });
    it('checks that child is being walked', () => {
      parent.children[0].fitness = 5;
      parent.children[0].walk();
      expect(parent.children[0].fitness).toEqual(9);
    });
    it('checks up on the child', () => {
      expect(parent.children[0].checkUp()).toEqual(greatMsg);
    });
  });

  describe('haveBaby', () =>{
    let pet;
    beforeEach(() => {
      pet = new Pet('Jessie');
    });
    it('creates child object as a property of parent', () => {
      pet.haveBaby('Spot');
      expect(pet.children).toEqual([
        {
          name: 'Spot',
          age: minAge,
          hunger: minHunger,
          fitness: maxFitness,
          children: [],
        }
      ])
    });
  });