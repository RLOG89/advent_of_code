var Keypad = function(instructions) {
  this.instructions = instructions;
}

Keypad.prototype = {
  getPosition: function(current, positions) {
    for (var i = 0; i < this.instructions.length; i++) {
      //split chars into single array elements
      var ind = this.instructions[i].split('');
    for (var j = 0;  j < ind.length; j++) {
          // make current equal to the lookup value for the char
          current = positions[current][ind[j]]
        }
        console.log("the code is " + current);
      }
    }

  };

  module.exports = Keypad;