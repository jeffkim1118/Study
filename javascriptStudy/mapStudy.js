const numbers = [1,-1,2,3];

// const items = numbers
// // .filter(n=> n >= 0)
// .map(n => ({value : n}))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);

// Original code
// const items = numbers
// .map(n => {
//     const obj = {value:n}
//     return obj
// })

// Simplified version of the original code
const items = numbers.map(n => ({value:n}))



console.log(items)