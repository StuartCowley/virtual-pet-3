const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Jessie')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Jessie');
      expect(pet.name).toEqual('Jessie');
    });
    it('has an initial age of 0', () => {
      const pet = new Pet('Jessie');
      expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Jessie');
     expect(pet.hunger).toEqual(0);
    });
    it('has initial fitness of 10', () => {
      const pet = new Pet('Jessie');
      expect(pet.fitness).toEqual(10);
    } )
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Jessie');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
      const pet = new Pet('Jessie');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
    it('decreases the fitness by 3', () => {
      const pet = new Pet('Jessie')
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increments the fitness by 4', () => {
      const pet = new Pet('Jessie');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('Jessie');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('Jessie');
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger to a minimum of 0', () => {
      const pet = new Pet('Jessie');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  });