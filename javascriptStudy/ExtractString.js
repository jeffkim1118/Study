// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction(a){
    console.log(a.slice(0, Math.floor(a.length/2)))
}

myFunction('abcdefgh');