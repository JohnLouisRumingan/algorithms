function stringAnagram(dictionary, query) {
    // Write your code here

    var totalAnagrams = [];

    //turn each dictionary word into a hash of letters;
    let dictionaryHash = [];
    for(let d=0; d<dictionary.length; d++){
      
      let currentDictionaryWord = dictionary[d];
      let currentDictionaryHash = {};
      for(let k=0; k<currentDictionaryWord.length; k++){
        if(!currentDictionaryHash[currentDictionaryWord.charAt(k)]){
          currentDictionaryHash[currentDictionaryWord.charAt(k)] = 1;
        }
        else if(currentDictionaryHash[currentDictionaryWord.charAt(k)]){
          currentDictionaryHash[currentDictionaryWord.charAt(k)]++;
        }
      }

      let currentDictionaryHashOrdered = {}
      Object.keys(currentDictionaryHash).sort().forEach(function(key) {
  currentDictionaryHashOrdered[key] = currentDictionaryHash[key];
});


      dictionaryHash.push(currentDictionaryHashOrdered);
    }

    console.log("dictionary in hashes", dictionaryHash);

    for(let i=0; i<query.length; i++){

        // first take the current query and turn it into subsequent hash of letters, POJO

        let currentQuery = query[i];
        let currentQueryHash = {};
        for(let k=0; k<currentQuery.length; k++){
          if (!currentQueryHash[currentQuery.charAt(k)]){
            currentQueryHash[currentQuery.charAt(k)] = 1;
          }
          else if(currentQueryHash[currentQuery.charAt(k)]){
            currentQueryHash[currentQuery.charAt(k)]++;
          }
        }
        let orderedQueryHash = {};
        Object.keys(currentQueryHash).sort().forEach         (function(key) {
              orderedQueryHash[key] = currentQueryHash[key];
        });

        console.log("ordered query hash", orderedQueryHash)
        // then take this query and compare it to each dictionary word, each with hash of letters
        //  if the hash of letters match, up the number in the dictionary 
        let currentAnagramTotal = 0;

        for(let w=0; w<dictionaryHash.length; w++){

          console.log("current dictionary hash", dictionaryHash[w])
          console.log("ordered query hash", orderedQueryHash)
          if(JSON.stringify(orderedQueryHash) === JSON.stringify(dictionaryHash[w])){
            currentAnagramTotal++;
          }
        }
        totalAnagrams.push(currentAnagramTotal);
    }



    return totalAnagrams;
}

// sample test 
// let dictionary = ["heater", "cold", "clod", "reheat"];
// let query = ["codl", "heater", "abcd"];

// stringAnagram(dictionary, query)
