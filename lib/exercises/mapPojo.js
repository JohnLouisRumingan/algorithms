// basic map functionality extended to objects

const map = (object, callback) => {

    //this map function requires the use of applying a callback to a value
    
    //in JS, arrays are objects with additional features. Indices are key-value pairs 
    
    let newObj = Object.keys(object).reduce(
        function(result, key){
        result[key] = callback(object[key]);
      
      return result;
    }, {});
    
    return newObj;
    
    
};


//map functionality but with the ability to specify a context for this, so that the second callback argument
// can be found within another method or class

const mapThis = (object, callback, context=this) => {

    //lost person context, "this"
    //assuming optional argument of context, can instead use an object literal 
    //e.g. let options = context || this  and use options on line 8 instead
    let newCall = callback.bind(context);
    
    let newObj = Object.keys(object).reduce(
    //anonymous function
    function(result, key){
     result[key] = newCall(object[key]);
    
     return result;
    }, {}
   );
  
  return newObj;
};


class Mapper {
    constructor(value) {
        this.value = value;
    }

    multiply(input) {
        return input * this.value;
    }
}

const mapper = new Mapper(2);
const mappedValues = map([1, 2, 3, 4], mapper.multiply, mapper);
console.log(mappedValues)
