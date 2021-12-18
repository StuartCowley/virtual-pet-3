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
    it('returns I am hungry if pets hunger is 10', () => {
      pet.hunger = 10;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('returns I need a walk AND I am hungry if fitness if 3 or less and fitness is 3 or less and its hunger is 5 or more', () => {
      pet.fitness = 3;
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I need a walk AND I am hungry');
    });
    it('returns I need a walk AND I am hungry if fitness if 3 or less and fitness is 3 or less and its hunger is 5 or more', () => {
      pet.fitness = 1;
      pet.hunger = 8;
      expect(pet.checkUp()).toEqual('I need a walk AND I am hungry');
    });
    it('returns I feel great if pets fitness is 4 or above and its hunger is 4 or less', () => {
      pet.fitness = 4;
      pet.hunger = 4;
      expect(pet.checkUp()).toEqual('I feel great');
    });
    it('returns I feel great if pets fitness is 4 or above and its hunger is 4 or less', () => {
      pet.fitness = 7;
      pet.hunger = 2;
      expect(pet.checkUp()).toEqual('I feel great');
    });
  });