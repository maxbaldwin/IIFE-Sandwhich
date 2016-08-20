// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = 
  {
    "ketchup": 2.00, 
    "mustard": 3.25,
    "spicy mustard": 4.00,
    "buffalo sauce": 13.45
  };

  // Augment the original object with another method
  maker.addCondiments = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);