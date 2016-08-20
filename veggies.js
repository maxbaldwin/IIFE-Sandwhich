// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = 
  {
    "mushrooms": 2.00, 
    "eggplant": 3.25,
    "corn": 4.00,
    "lettuce": 13.45
  };

  // Augment the original object with another method
  maker.addVeggie = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);