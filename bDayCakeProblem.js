/* Problem: Birthday candles counter.
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/

//Solution
function birthdayCakeCandles(candles) {
    // Store the highest value in the candles array.
    let tallest = 0;
    // Count how many of tallest candles exist.
    let tallestCounter = 0;
    // Make a copy of the candles array to prevent mutation of the original array.
    let arrCopy = candles.slice();
    
    // First for loop search for the highest value in the array. Then, it stores the higest value in the tallest variable.
    for(let i = 0; i < arrCopy.length; i++){
        if(arrCopy[i] > tallest){
            tallest = arrCopy[i];
        }
    }
    // Second for loop searches for the candles with same value then, count them. 
    //EX. If the tallest candle is "5" then, it will find for candles with the same value of "5".
    for(let j = 0; j < arrCopy.length; j++){
        if(arrCopy[j] == tallest){
            tallestCounter += 1;
        }
    }
    // Return the final answer. 
    console.log(tallestCounter);
}

// Sample Test (In this case, it would be "2" because the tallest candle value is "4" and there are two of them.)
const candlesArr = [4,4,1,3]
birthdayCakeCandles(candlesArr)
