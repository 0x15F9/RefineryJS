module.exports =  {
  RandomInteger      : function(min, max){
    var random_number =  Math.floor(Math.random()*(max-min+1)+min);
    return random_number;
  },

  RandomFloat      : function(min, max){
    var random_number =  Math.random()*(max-min+1)+min;
    return random_number;
  },

  GenerateGenome    : function(genome_length, character_pool){
    var Genome    = "";
  
    for (var i = 0; i < genome_length; i++){
      Genome += character_pool.charAt(Math.floor(Math.random() * character_pool.length));
    }

    return Genome;
  },

  SwapGene          : function(gene){
    if(gene == '0'){
      gene = 1;
    }else{
      gene = 0;
    }
    return gene;
  },

  RandomizeGenome   : function(genome, mutation_rate){
    var new_genome = [];
    for (let index = 0; index < genome.length; index++) {
      var random_float = this.RandomFloat(0, 1);
      if (random_float < mutation_rate) {
        new_genome.push(this.SwapGene(genome[index]));
      } else{
        new_genome.push(genome[index]);
      }
    }
    return new_genome.join('');
  },

  GeneratePopulation: function(population_size, genome){

    var population = [];

    for (let index = 0; index < population_size; index++) {
      population.push(genome);
    }
    
    return population;
  },

  RandomizePopulation: function(population, mutation_rate){
    var new_population = [];

    for (let index = 0; index < population.length; index++) {
      var genome = population[index];
      new_population.push(this.RandomizeGenome(genome, mutation_rate));
    }
    return new_population;
  }
};