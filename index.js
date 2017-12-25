const refinery = require('./refinery');

// var pool  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var char_pool   = "01";
var genome      = refinery.GenerateGenome(10, char_pool);
var population  = refinery.GeneratePopulation(10, genome);

console.log(genome);
console.log(population);