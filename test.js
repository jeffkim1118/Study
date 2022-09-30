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
// function buildFunction(){
//     const data = {
//         input: [],
//         output: []
//     }
//     return (numbers) => {
//         data.input = data.input.concat(numbers)
//         data.input.sort()
//         data.input.forEach(n => {
//             if(data.output.includes(n)){
//                 return
//             }

//             if(n === 1){
//                 data.output.push(n)
//                 console.log(n)
//             }

//             let printMe = true
//             for(let i = n - 1; i >= 1; i++){
//                 if(i > 1 && !data.output.includes(i)){
//                     printMe = false
//                     break
//                 }
//             }

//             if(printMe){
//                 data.output.push(n)
//                 console.log(n)
//             }
//         })
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
//     }
// }
// const printArray = buildFunction()

// printArray([2, 5])
// printArray([1])
// printArray([3, 4, 7, 6])

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


// function viralAdvertising(n) {
//     let shared = 5
//     let liked = 0 
//     let cumulative = 0
    
//     for(let day = 0; day < n; day++){
//         liked = Math.floor(shared/2)
//         // console.log(liked)
//         cumulative += liked
//         // console.log(cumulative)
//         shared = liked * 3
//     }
//     console.log(cumulative)
// }

// viralAdvertising(3)

// const queries = [ 1, 2, 5 ]

// for(let i of queries){
//     console.log(i)
// }


// function buildPrint() {
//     // This is the data the inner function will close over, allowing it to remember things across calls
//     const data = {input: [], output: []}
  
//     return (numbers) => {
//       // First, we need to add the new numbers to our full list of inputs
//       data.input = data.input.concat(numbers)
  
//       // Then we find the maximum number we've been given so far
//       let max = data.input[0]
//       data.input.forEach(n  => {
//         if (n > max) {
//           max = n
//         }
//       })
  
//       // Now, we loop from 1 to the maximum number we've been given
//       const toPrint = []
//       for (let i = 1; i <= max; i++) {
  
//         // if we find a number we haven't been given yet, we stop
//         if (!data.input.includes(i)){
//           break;
//         }
  
//         // if we haven't output the number yet, we add it to the array of numbers to be printed this call
//         if (!data.output.includes(i)) {
//           toPrint.push(i)
//         }
//       }
  
//       // we add all the numbers we'll be printing to our log of output numbers and then print them out
//       data.output = data.output.concat(toPrint)
//       console.log(toPrint.join(', '))
//     }
//   }
  
//   const print = buildPrint()
  
//   console.log('call 1 with [2, 5]')
//   print([2, 5])
//   console.log('call 2 with [1]')
//   print([1])
//   console.log('call 3 with [3, 4, 7, 6]')
//   print([3, 4, 7, 6])


// let n = []
// for(let i = 1; i <=p.length; i++){
//     let ind = p.indexOf(i) + 1
//     n.push(ind) 
// }
// let res = []
// for (let num of n){
//    res.push(p.indexOf(num)+1)
// }
// return res


function jumpingOnClouds(c, k) {
    let e = 100; let index = []
    for(let i = 0; i < c.length; i++){
        if(c[i] == 1){
            e -= 2;
        }
        e--;
    }
    console.log(e);
}

let c = [0, 0, 1, 0, 0, 1, 1, 0]
let k = 2
jumpingOnClouds(c, k)