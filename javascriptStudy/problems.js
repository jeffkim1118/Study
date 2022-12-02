// Anagram Checker
// Input: wgwdf, bwgdff
// Output: false
function anagramChecker(input1, input2){
    let firstInputArray = input1.split('').sort().join('')
    let secInputArray = input2.split('').sort().join('')
    return firstInputArray === secInputArray
}
console.log(anagramChecker('aghcb36!$@%^', 'aghcb6^3@$!%'))

//______________________________________________________

// String character counter
// Count each characters in a string and display them using an object.

function charCounter(str){

    let obj = {}
    str.split('').forEach((char) => {
        if(!obj[char]) obj[char] = 0
        obj[char]++
    })
    return obj
}
console.log(charCounter("gawrgbdfwvb"))

//______________________________________________________

// Reverse a string
function reverseStr(str){
//    return str.split('').reverse().join('');
    // let array = [];
    // for(let i = str.length-1; i >= 0; i--){
    //     array.push(str[i])
    // }
    // return array.join('')
    
    let stack = []
    let i = 0
    let reversed = ""

    while(i !== str.length){
        stack.push(str.charAt(i))
        i++
    }
    
    while(stack.length !== 0){
        reversed += stack.pop();
    }
    return reversed
}
console.log(reverseStr('abcdeab36&$#'))

//_______________________________________________________

// Palindrome checker
function palindrome(str){
    return str.split('').reverse().join('') === str
}
console.log(palindrome('bac%cab^'))






