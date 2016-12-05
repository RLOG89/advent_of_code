var fs = require('fs');
var buffer = fs.readFileSync("input.txt");
var triLines = buffer.toString().trim().split('\n');

var triData = triLines.map(function(line) {
  var numStrings = line.trim().split(/\s+/).map(Number)
  return numStrings
});

  var results = []
  for (var i = 0; i < triData.length; i++) {
    var triData[i][0] = a
    var triData[i][2] = b
    var triData[i][3] = c
    if ((triData[i][0] + triData[i][1] > triData[i][2]) && 
          (triData[i][1] + triData[i][2] > triData[i][0]) &&
            (triData[i][0] + triData[i][2] > triData[i][1]))
            {
      results.push(triData[i]);
    } 
 }
   return (console.log(results.length))