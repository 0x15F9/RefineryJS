module.exports = {

  RandomInteger      : function(min, max){
    var random_number =  Math.floor(Math.random()*(max-min+1)+min);
    return random_number;
  },

  RandomFloat      : function(min, max){
    var random_number =  Math.random()*(max-min+1)+min;
    return random_number;
  }
};