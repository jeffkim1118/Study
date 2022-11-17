// To do:
// 1. Return max length of longest array.
// 2. Return all the strings in the arrays.
// 3. Return all the numbers in array.
// 4. All the elements in each array to be an object with key as index and value as the element of the array index.
// 5. Add booleans into the arrays, do not count booleans as part of the length of the arrays and do not add key value in the objects for booleans.


function myFunction(obj, elementType = 'string', sub = 'not'){
    // 1. Return max length of longest array.
    let arraysOfA = Object.values(obj)
    // // let maxLength = Math.max(...arraysOfA.map((array) => array.length))
    // let maxLength = 0;
    // // console.log(arraysOfA.map((array) => array.length))
    // Object.values(obj).forEach(array => maxLength = Math.max(maxLength, array.length));

    // console.log(maxLength);

    // return maxLength;

    // return Math.max(...Object.values(obj).map((array => array.length)))

    // Shortest array
    // let arraysOfA = Object.values(obj)
    // let minLength = Math.min(...arraysOfA.map((array) => array.length))
    // return minLength



    // 2. Return all the strings in arrays.
    // 3. Return all the numbers in array.
    // let stringResult = [];
    // let numberResult = [];
    // let result = [];
    // return arraysOfA.map((array) => array.filter(element => {
       
    //     // if(typeof element === 'string'){
    //     //     stringResult.push(element)
    //     //     // const o1 = {[array.indexOf(element)] : array[array.indexOf(element)]}
    //     //     // result.push(o1)
    //     // }else if(typeof element === 'number'){
    //     //     numberResult.push(element)
    //     //     // const o2 = {[array.indexOf(element)] : array[array.indexOf(element)]}
    //     //     // result.push(o2)
    //     // }
    //     let counter = 0
    //     return typeof element === elementType
    // }))
    // return stringResult + ' ' + numberResult
    
    // let counter = 0
    // arraysOfA.map((array) => array.forEach(element => {  
    //     if(typeof element === elementType){
    //         if(element.toLowerCase().includes('not')){
    //             counter++
    //         }
    //     }
    // }))
    // return counter
    let a = []
   arraysOfA.map(array => array.map(element => {
    const ob = {}
        if(typeof element === 'object'){
            ob[element.name] = element.gender
            a.push(ob)
        }
    }))
    return a
    // return result
    // [
    //     { '0': 'city' },
    //     { '1': 3 },
    //     { '2': 5 },
    //     { '3': 10 },
    //     { '4': 'state' },
    //     { '0': 'nothing' },
    //     { '1': 1 },
    //     { '2': 3 },
    //     { '0': 'something' },
    //     { '1': 'flushing' }
    // ]



    // 4. All the elements in each array to be object with key as index and value as the element of the array index.
    // let a = [];
    // arraysOfA.forEach((array) => array.forEach((e) => {
    //     const newObj = {};
    //     newObj[array.indexOf(e)] = e;
    //     a.push(newObj);
    // }))
    // return a


    // 5. Add booleans into the arrays, do not count booleans as part of the length of the arrays and do not add key value in the objects for booleans.
    // Object.values(obj).forEach(array => array.push(false))
    // let values = Object.values(obj)
    // return Math.max(...values.map(ele => ele.filter(Boolean).length))

    // let newArray = [];
    // values.map((val) => val.map((ele) => {
    //     const newObject = {}
    //     if(typeof ele !== 'boolean'){
    //         newObject[ele] = val.indexOf(ele)
    //         newArray.push(newObject)
    //     }
    // }))
    // return newArray;



    // Destructuring an object.
    // const {Manhattan, Brooklyn, Queens} = obj
    // return Manhattan

    // let a,b,rest
    // [a,b,...rest] = [1,2,3,4,5]
    // console.log(a,b,rest)

    // let array = [1,2,3,4,5]
    // array.map((n,index) => {
    //     if(index % 2 === 0){
    //         console.log(n)
    //     }
    // })


    // Object.values(obj).map(array => array.map(subArr => {
    //     typeof subArr === 'object' ? console.log(subArr) : null
    // }))

}

const myObj = {
    Manhattan : ['city', 3, 5, 10, 'state', {name:'james', gender:'male'}],
    Brooklyn : ['nothing', 1, 3, 'cannot'],
    Queens : ['something', 'flushing', {name:'test', gender:'unknown'}]
}
console.log(myFunction(myObj))