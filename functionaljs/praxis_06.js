    function countWords(inputWords) {
      return inputWords.reduce(function(counterMap, word)	{
      	counterMap[word] = (counterMap[word] != undefined ? ++counterMap[word] : 1);
      	return counterMap;
      }, {})
    }
    
    module.exports = countWords