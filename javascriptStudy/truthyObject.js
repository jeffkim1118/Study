// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

// Source: https://www.jschallenger.com/javascript-practice/javascript-objects/object-has-property-defined-value-javascript

function myFunction(a,b){
    // if(b in a){
    //     if(a[b] == null || a[b] == undefined || a[b] == false){
    //         console.log(false)
    //     }else{
    //         console.log(true)
    //     }
    // }else{
    //     console.log(false)
    // }

    console.log(Boolean(a[b]))
}
myFunction({a:1,b:2,c:3},'b')