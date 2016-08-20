// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = 
  {
    "cheese 1": 2.00, 
    "cheese 2": 3.25,
    "cheese 3": 4.00,
    "cheese 4": 13.45
  };

  // Augment the original object with another method
  maker.addCheese = function(selectedCheese) {
    return cheesePrices[selectedCheese];
  }
  makergetCheese = function(){
    return cheesePrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});