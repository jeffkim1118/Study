let string = 'abacecdedgg';

let arr = [''];

for(let i = 0; i < string.length; i++){
    arr[arr.length-1] += string[i]
}
console.log(arr)