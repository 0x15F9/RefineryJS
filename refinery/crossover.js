var random = require('./random');

module.exports = {
  OnePointCrossOver : function(genome_one, genome_two){
    var starting_index = random.RandomInteger(0, genome_one.length);
    var new_genome = [];
    for (let index = 0; index < starting_index; index++) {
      new_genome.push(genome_one[index]);
    }
    for (let index = starting_index; index < genome_two.length; index++) {
      new_genome.push(genome_two[index]);
    }

    return new_genome.join('');
  }
};