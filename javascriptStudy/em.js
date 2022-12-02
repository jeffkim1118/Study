//anagram checker
let string1 = 'abbvccccde'
let string2 = 'cdabc'

let obj1 = {}
let obj2 = {}

for(let i = 0; i < string1.length; i++){
    if(!obj1[string1[i]]) obj1[string1[i]] = 0;
    obj1[string1[i]]++;
}

for(let j = 0; j < string2.length; j++){
    if(!obj2[string2[j]]) obj2[string2[j]] = 0;
    obj2[string2[j]]++;
}

Object.keys(obj1).map((char) => obj1[char] === obj2[char])
let longest = 0;
let longestVal;
let result = '';
let arr = [];

Object.keys(obj1).sort((first, sec) => obj1[first] - obj1[sec]).filter((i) => {
    if(longest < obj1[i]){
        longest=obj1[i]
    }
    longestVal = Math.max(0,longest)

    if(obj1[i] === longestVal){
        result = i
    }
})

console.log(Object.keys(obj1).sort((first, sec) => obj1[sec] - obj1[first]))


console.log(result)







// character counter
// 'agafsggas'

function charCounter(str){
    let obj = {}

    for(let i = 0; i < str.length; i++){
        if(!obj[str[i]]) obj[str[i]] = []
        obj[str[i]].push(str[i])
    }
    let largest = 0
    Object.values(obj).forEach((array) => {
        if(largest < array.length){largest=array.length}
    })
}
let str = 'baddfbasdf'
console.log(charCounter(str))




// Reverse string

function reverseStr(str){

}

console.log(reverseStr('h35h4ws5try5$^##'))





// Palindrome

function palin(str){
    let reversed = str.split('').reverse().join('')
    return str === reversed
}
console.log(palin('jhaltdjhlajwog'))



