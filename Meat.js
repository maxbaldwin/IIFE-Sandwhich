// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = 
  {
    "turkey": 2.00, 
    "buffalo chickent": 3.25,
    "steak": 4.00,
    "dinosaur": 13.45
  };

  // Augment the original object with another method
  maker.addMeat = function(selectedMeat) {
    return meatPrices[selectedMeat];
  }
  makergetMeat = function(){
    return meatPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});