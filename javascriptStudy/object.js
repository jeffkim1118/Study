// To do:
// 1. Return max length of longest array.
// 2. Return all the strings in the arrays.
// 3. Return all the numbers in array.
// 4. All the elements in each array to be an object with key as index and value as the element of the array index.
// 5. Add booleans into the arrays, do not count booleans as part of the length of the arrays and do not add key value in the objects for booleans.


function myFunction(obj){
    // 1. Return max length of longest array.
    let arraysOfA = Object.values(obj)
    let maxLength = Math.max(...arraysOfA.map((array) => array.length))
    // return maxLength;

    // 2. Return all the strings in the arrays.
    // 3. Return all the numbers in array.
    let stringResult = [];
    let numberResult = [];
    arraysOfA.forEach((array) => array.forEach(element => {
        if(typeof element === 'string'){
            stringResult.push(element)
        }else if(typeof element === 'number'){
            numberResult.push(element)
        }
    }))
    //return stringResult + ' ' + numberResult
    
    // 4. All the elements in each array to be object with key as index and value as the element of the array index.
    let a = [];
    arraysOfA.forEach((array) => array.forEach((e) => {
        const newObj = {};
        newObj[array.indexOf(e)] = e;
        a.push(newObj);
    }))
    return a
}

const myObj = {
    Manhattan : ['city', 3, 5, 10, 'state'],
    Brooklyn : ['nothing', 1, 3],
    Queens : ['something', 'flushing']
}
console.log(myFunction(myObj))