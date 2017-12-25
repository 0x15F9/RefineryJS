const refinery = require('./refinery');
var g = refinery.GenerateGenome(5, "01");
var p = refinery.GeneratePopulation(5, g);

function FitnessCalculator(optimum, available){
  var points = 0;
  for (let index = 0; index < optimum.length; index++) {
    if (optimum[index] == available[index]) {
      points += 1;
    }
  }

  var fitness = (points / optimum.length);
  return fitness;
}

var op = "01010";


console.log(g)
console.log(op)
console.log(FitnessCalculator(op, g))
// console.log(refinery.RandomizeGenome(g, 0.3))

// console.log(p);
// console.log(refinery.RandomizePopulation(p, 0.3));