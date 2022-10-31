// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array

function myFunction(a, b){
    const newArray = a.filter((value) => value !== b)
    console.log (newArray);
}

myFunction([1,2,3], 2)              //Expected: [1, 3]
myFunction([1,2,'2'], '2')          // [1, 2]
myFunction([false,'2',1], false)    // ['2', 1]
myFunction([1,2,'2',1], 1)          // [2, '2']