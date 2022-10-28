// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function myFunction(a,b){
    if(b in a){
        if(a.b == null || a.b == undefined || a.b == false){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}
myFunction({a:1,b:2,c:3},'b')