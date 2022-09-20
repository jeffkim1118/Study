/*
print out numbers in arrays

function call 1
[2, 5]
prints out: nothing.

function call 2
[1]
prints out: 1, 2

function call 3
[3,4,7,6]
prints out: 
*/

function printArray(array){
    let newArray = array.slice()
    let sortedArray = newArray.sort((a,b) => a - b)
    for(let i = 0; i<sortedArray.length; i++){
        if(sortedArray[i] == i+1){
            console.log(sortedArray[i])
        }
    }
}
printArray([3, 4, 1])


