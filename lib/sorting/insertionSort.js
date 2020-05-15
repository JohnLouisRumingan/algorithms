function findMinAndRemove(array){

    let smallestNum = array[0];
    let smallestIndex = 0;
    
    for(let i=1; i<array.length; i++){
        if(array[i] < smallestNum){
            smallestNum = array[i];
            smallestIndex = i;
        }
    }
    // splice array, removing the lowest element of array
    array.splice(smallestIndex, 1);
    console.log(array)
    return smallestNum;
}

function insertionSort(array){

    let sortedArray = [];
    while(array.length > 0){
        let smallNumber = findMinAndRemove(array);
        sortedArray.push(smallNumber);
    }

    return sortedArray;
}