// Require
var Refinery = require('../refinery');

// variables
var characters  = "01";
var optimum     = "10100";

// Custom functions
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

function FitnessLooper(population, fitness_optimum) {
  var fitness_array = [];
  for (let index = 0; index < population.length; index++) {
    fitness_array[index] = FitnessCalculator(fitness_optimum, population[index]);
  }
  return fitness_array;
}

// Generate Genome
var genome = Refinery.GenerateGenome(5, characters);
console.log("Genome: "+genome);

// Use Genome to generate population
var population = Refinery.GeneratePopulation(5, genome);
console.log("Population 1: " + population);

// Randomize population
population      = Refinery.RandomizePopulation(population, 0.3)
console.log("Ran Population: "+population);

// Calculate fitness of each genome
var fitness = FitnessLooper(population, optimum);
console.log(fitness);

// reject worst 50%

// Generate half population

// keep top 10%

// cross over top 50%