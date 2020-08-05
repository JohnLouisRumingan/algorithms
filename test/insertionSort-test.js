const { expect } = require("chai");

describe('#insertionSort', function() {
    it("sorts an array", function (){
        let array = [2,5,4,3,7,6];
        expect(insertionSort(array).toEqual([2,3,4,5,6,7]))
    })
})