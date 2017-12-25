module.exports =  {
  RandomNumber      : function(min, max){
    var random_number =  Math.floor(Math.random()*(max-min+1)+min);
    return random_number;
  },

  GenerateGenome    : function(genome_length, character_pool){
    var Genome    = "";
  
    for (var i = 0; i < genome_length; i++){
      Genome += character_pool.charAt(Math.floor(Math.random() * character_pool.length));
    }

    return Genome;
  },

  RandomizeGenome   : function(genome, mutation_rate){
    // TODO: 
  },

  GeneratePopulation: function(population_size, genome){

    var population = [];

    for (let index = 0; index < population_size; index++) {
      population.push(genome);
    }
    
    return population;
  },

  RandomizePopulation: function(population, mutation){
    var new_population = [];
    for (let index = 0; index < population.length; index++) {
      var genome = population[index];
      RandomizeGenome(genome);
      genome.push(new_population);
    }
    return new_population;
  }
};