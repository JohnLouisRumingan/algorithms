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

const mapThis = (object, callback, context) =>{

    
}

