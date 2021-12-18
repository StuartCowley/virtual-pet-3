const Pet = require('../src/pet');

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
      expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
     expect(pet.hunger).toEqual(0);
    });
    it('has initial fitness of 10', () => {
      expect(pet.fitness).toEqual(10);
    } )
  });

  describe('growUp', () => {
    let pet;
    beforeEach(() => {
     pet = new Pet('Jessie');
    });
    it('increments the age by 1', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
    it('decreases the fitness by 3', () => {
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
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
      expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
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
      expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('checkUp', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Jessie');
    });
    it('returns I need to walk if pets fitness is 3 or less', () => {
      pet.fitness = 3;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I need a walk')
    });
    it('returns I need to walk if pets fitness is 1', () => {
      pet.fitness = 1;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I need a walk')
    });
    it('returns I am hungry if pets hunger is 5 or more', () => {
      pet.hunger = 5;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('returns I am hungry if pets hunger is 9', () => {
      pet.hunger = 9;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('returns I need a walk AND I am hungry if fitness is 3 or less and its hunger is 5 or more', () => {
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I need a walk AND I am hungry');
    });
    it('returns I need a walk AND I am hungry if fitness is 1 and its hunger is 8', () => {
      pet.fitness = 1;
      pet.hunger = 8;
      expect(pet.checkUp()).toEqual('I need a walk AND I am hungry');
    });
    it('returns I feel great if pets fitness is 4 or above and its hunger is 4 or less', () => {
      pet.fitness = 4;
      pet.hunger = 4;
      expect(pet.checkUp()).toEqual('I feel great');
    });
    it('returns I feel great if pets fitness is 7 and its hunger is 2', () => {
      pet.fitness = 7;
      pet.hunger = 2;
      expect(pet.checkUp()).toEqual('I feel great');
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('isAlive', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Jessie');
    });
    it('returns false if fitness is 0 or less', () => {
      pet.fitness = 0;
      expect(pet.isAlive).toBe(false);
    });
    it('returns false if hunger is 10 or more', () => {
      pet.hunger = 10;
      expect(pet.isAlive).toBe(false);
    });
    it('returns false if pet age is 30 or more', () => {
      pet.age = 30;
      expect(pet.isAlive).toBe(false);
    });
    it('returns true if pet fitness is 1 or above, hunger is 9 or less, age is under 30', () => {
      pet.fitness = 1;
      pet.hunger = 9;
      pet.age = 29;
      expect(pet.isAlive).toBe(true);
    });
  });