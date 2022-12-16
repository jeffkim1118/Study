//anagram checker
// let string1 = 'abbvccccde'
// let string2 = 'cdabc'

// let obj1 = {}
// let obj2 = {}

// for(let i = 0; i < string1.length; i++){
//     if(!obj1[string1[i]]) obj1[string1[i]] = 0;
//     obj1[string1[i]]++;
// }

// for(let j = 0; j < string2.length; j++){
//     if(!obj2[string2[j]]) obj2[string2[j]] = 0;
//     obj2[string2[j]]++;
// }

// Object.keys(obj1).map((char) => obj1[char] === obj2[char])
// let longest = 0;
// let longestVal;
// let result = '';
// let arr = [];

// Object.keys(obj1).sort((first, sec) => obj1[first] - obj1[sec]).filter((i) => {
//     if(longest < obj1[i]){
//         longest=obj1[i]
//     }
//     longestVal = Math.max(0,longest)

//     if(obj1[i] === longestVal){
//         result = i
//     }
// })

// console.log(Object.keys(obj1).sort((first, sec) => obj1[sec] - obj1[first]))


// console.log(result)







// character counter
// 'agafsggas'

// function charCounter(str){
//     let obj = {}

//     for(let i = 0; i < str.length; i++){
//         if(!obj[str[i]]) obj[str[i]] = []
//         obj[str[i]].push(str[i])
//     }
//     let largest = 0
//     Object.values(obj).forEach((array) => {
//         if(largest < array.length){largest=array.length}
//     })
// }
// let str = 'baddfbasdf'
// console.log(charCounter(str))




// // Reverse string

// function reverseStr(str){

// }

// console.log(reverseStr('h35h4ws5try5$^##'))





// // Palindrome

// function palin(str){
//     let reversed = str.split('').reverse().join('')
//     return str === reversed
// }
// console.log(palin('jhaltdjhlajwog'))







//28. Find the Index of the First Occurrence in a String
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/
function findNeedle(haystack, needle){
    // return haystack.indexOf(needle)
    if(needle === "") return 0;
    if(haystack===null || needle===null) return -1
    haystack_loop: for(let i = 0; i <= haystack.length-needle.length; i++){
      // Avoid looping needle if first letter doesn't match
      if(haystack.charAt(i)===needle.charAt(0)){
        for(let j = 1; j< needle.length; j++){
          if(haystack.charAt(i+j) !== needle.charAt(j)){
            continue haystack_loop;
          }
        }
        return i;
      }
    }
   return -1;
}
console.log(findNeedle("haegbsadbww", 'sad'))




// Caesars Cipher
// Decrypt caesars cipher code

function caesarsCipher(str){
    const chart = {
        'A' : 'N',
        'B' : 'O',
        'C' : 'P',
        'D' : 'Q',
        'E' : 'R',
        'F' : 'S',
        'G' : 'T',
        'H' : 'U',
        'I' : 'V',
        'J' : 'W',
        'K' : 'X',
        'L' : 'Y',
        'M' : 'Z',
        'N' : 'A',
        'O' : 'B',
        'P' : 'C',
        'Q' : 'D',
        'R' : 'E',
        'S' : 'F',
        'T' : 'G',
        'U' : 'H',
        'V' : 'I',
        'W' : 'J',
        'X' : 'K',
        'Y' : 'L',
        'Z' : 'M',
        '!' : '!',
        '?' : '?',
        '.' : '.',
        ',' : ','
      }
    
      let result = [];
    
      for(let i = 0; i < str.length; i++){
          if(str[i] === ' '){
              result.push(' ')
          }
        for(const prop in chart){
          if(str[i] === chart[prop]){
            result.push(prop)
          }
        }
      }
      return result.join('');
}
console.log(caesarsCipher('abadfe'))



/*
Design a cash register drawer function checkCashRegister() that 
accepts purchase price as the first argument (price), 
payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.
*/

// function cashRegister(price, payment, cid){
    
// }
// //Arguments: price, payment, cash-in-drawer
// console.log(cashRegister(11.75, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))