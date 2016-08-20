// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = 
  {
    "Bread 1": 2.00, 
    "Bread 2": 3.25,
    "Bread 3": 4.00,
    "Bread 4": 13.45
  };

  // Augment the original object with another method
  maker.addBread = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);