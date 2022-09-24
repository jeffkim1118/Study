/*
Create a function to print out numbers in arrays.
The function will be called three times.
The numbers must be in sequential order.
Don't have to print out numbers that are already been printed out.

example:

function call 1
input: [2, 5]
prints out: nothing.

function call 2
input: [1]
prints out: 1, 2

function call 3
input: [3,4,7,6]
prints out: 3, 4, 5, 6, 7
*/

//My Solution
function buildFunction(){
    const data = {
        input: [],
        output: []
    }
    return (numbers) => {
        data.input = data.input.concat(numbers)
        data.input.sort()
        data.input.forEach(n => {
            if(data.output.includes(n)){
                return
            }

            if(n === 1){
                data.output.push(n)
                console.log(n)
            }

            let printMe = true
            for(let i = n - 1; i >= 1; i++){
                if(i > 1 && !data.output.includes(i)){
                    printMe = false
                    break
                }
            }

            if(printMe){
                data.output.push(n)
                console.log(n)
            }
        })
        // let max = 0
        // data.input.forEach(n=>{
        //     if(n>max){
        //         max = n;
        //     }
        // })

        // const forOutPut = [];
        // for(let i = 1; i <= max; i++){
        //     if(!data.output.includes(i) && !data.output.includes(i)){
        //         data.output.push(i)
        //         forOutPut.push(i)
        //     }
        // }
        // console.log(forOutPut.join(", "))
    }
}
const printArray = buildFunction()

printArray([2, 5])
printArray([1])
printArray([3, 4, 7, 6])

// function printArray(array){
//     let newArray = array.slice()
//     let sortedArray = newArray.sort((a,b) => a - b)
//     for(let i = 0; i<sortedArray.length; i++){
//         if(sortedArray[i] == i+1){
//             console.log(sortedArray[i])
//         }
//     }
// }
// printArray([3, 4, 1])



/*
Build a function to find the minimum amount of obstacles that need to be destroyed
to make the blocks to reach the bottom. (Pretend that the blocks are falling to the bottom.)

* = block
0 = empty space
X = obstacle

example:
Input:
[[0, *, *], 
 [*, *, 0], 
 [*, *, 0],
 [X, 0, X],
 [0, X, 0]]

 Output: 2
*/