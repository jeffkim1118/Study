// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

function myFunction(a, b){

    console.log(a < b)
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) // true
myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')) // false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) // false