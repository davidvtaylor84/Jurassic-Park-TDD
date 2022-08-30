const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur;
let dinosaur1;
let dinosaur2;
let dinosaur3;
let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 89);
    dinosaur1 = new Dinosaur('Triceratops', 'herbivore', 978);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 647);
    dinosaur3 - new Dinosaur('Stegosaurus', 'herbivore', 876);
    dinosaur4 = new Dinosaur('Bigfoot', 'omnivore', 6);

  })

  it('should have a name', function(){
    const actual = park.name
    assert.equal(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 89)
  });

  it('should have a collection of dinosaurs', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = [dinosaur4]
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur3);
    const actual = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    // park.addDinosaur(dinosaur1);
    // park.addDinosaur(dinosaur2);
    // park.addDinosaur(dinosaur3);
    // const actual = dinosaur1
    // assert.deepStrictEqual(actual, park.findMostVisitors())
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    // park.addDinosaur(dinosaur1);
    // park.addDinosaur(dinosaur2);
    // park.addDinosaur(dinosaur3);
    // park.findDinosaur("Stegosaurus")
    // const actual = dinosaur3
    // assert.deepStrictEqual(actual, "Stegosaurus")
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = 2501
    assert.strictEqual(actual, park.totalVisitors())
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
