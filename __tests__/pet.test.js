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
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Jessie');
      pet.growUp();
      expect(pet.age).toEqual(1);
    })
  });