function maxTrailing(levels) {

    let largestDiff = -1;
    let minimum = levels[0];
    
    for(let i=0; i<levels.length; i++){
        
        if(levels[i] > minimum && largestDiff < (levels[i] - minimum)){
            largestDiff = levels[i] - minimum;
        }

        if(levels[i] < minimum){
            minimum = levels[i];
        }
    }

    return largestDiff;
}