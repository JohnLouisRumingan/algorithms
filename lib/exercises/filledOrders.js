function filledOrders(order, k) {
    // Write your code here

    var fulfilledOrders = 0;
    let sortedOrders = order.sort((a,b)=>a-b);
    let remainingWidgets = k;
    let currentPosition = 0;

    while(remainingWidgets >= 0){
        remainingWidgets -= sortedOrders[currentPosition];
        console.log(remainingWidgets)
        if(remainingWidgets >= 0){
        fulfilledOrders += 1;
        currentPosition += 1;
        }
    }
    return fulfilledOrders;
}

let array = [5,3,2, 100]
filledOrders(array, 10)