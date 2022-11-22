function myfunction(input){
    // const arr = [1,2,3,4,5,6,7,8,9]
    // console.log(input.split('').filter(e => arr.includes(Number(e))).join(''))
    return input.split('').filter(e => !Number(e) && Number(e) !== 0).join('')
}
// console.log(myfunction('djfks02423'))


function reverseString(input){
    return input.split('').reverse().join('');
}
// console.log(reverseString('bdfsegsdf144'))



function reverseStringTwo(input){
    let array = input.split('');
    let result = []

    for(let i = input.length-1; i > 0; i--){
        result.push(array[i])
    }
    return result.join('')
}
// console.log(reverseStringTwo('bdfsegsdf144'))



function reverseStringThree(input){
    // Pointers
    let left = 0;
    let right = input.length-1;
    
    let charArray = input.split('');
    while(left <= right){
        charArray[left] = charArray[right];
        charArray[right] = charArray[left];
        left++;
        right--;
    }
    return charArray.join('')
}
// console.log(reverseStringTwo('bdfsegsdf144'))




// Anagram: check if two given strings are anagram or not.

function anagramChecker(input1, input2){
    let firstInputArray = input1.split('').sort().join('')
    console.log(firstInputArray)
    let secInputArray = input2.split('').sort().join('')
    console.log(secInputArray)
    // return firstInputArray === secInputArray ? true : false;
    return Boolean(firstInputArray === secInputArray)

}
console.log(anagramChecker('aghcb36!$@%^', 'aghcb6^3@$!%'))   // false

console.log('435230546'.split('').sort().join(''))



// console out only numbers from the given string

let str = 'dag32egw024153';

function numbs(str){
    return str.split('').filter((element) => !!Number(element) || Number(element) === 0).sort((a,b) => a-b).join('');
}
console.log(numbs(str))

function stringS(str){
    return str.replace(/[^a-z]/g, '')
}
console.log(stringS(str))