// function palindrome(str) {
//     let filteredStr = str.replace(/[^a-z]/gi,'').toLowerCase();
//     let letters = [];
//     let reverseStr = "";
//     console.log(filteredStr)
  
//     for(let i = 0; i < filteredStr.length; i++){
//       letters.push(filteredStr[i]);
//     }
  
//     for(let i = 0; i < filteredStr.length; i++){
//       reverseStr += letters.pop();
//     }
  
//     if(reverseStr === filteredStr){
//       console.log(true);
//     }else{
//         console.log(false);
//     }
//   }
  
//   palindrome("My age is 0, 0 si ega ym.");



//   function isPalindrome(x) {   
//     let stringNum = x.toString()
//     let arr = []

//     for(let i = stringNum.length-1; i>=0 ; i--){
//       arr.push(stringNum[i])
//     }
//     let reversed = arr.join('')
//     let reversedNum = parseInt(reversed)
    
//     if(reversedNum === x){
//       return true
//     }else{
//       return false
//     }
// };

var isPalindrome = function(x) {
  let arr = new Array()
  arr.push(x)
  console.log(arr.join(''))
  // console.log( arr.join('').split('').reverse().join('') === arr.join())
  };

isPalindrome(131)