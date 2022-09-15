// Last in First out
// Functions: push, pop, peek, length
// Example: find palindrome

let letters = []; // This is our stack

let word = "racecar";

let reverseWord = "";

// Put letters of word into stack
for(let i = 0; i<word.length;i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for(let i = 0; i<word.length;i++){
    reverseWord += letters.pop();
}

if(reverseWord === word){
    console.log(word + " is a palindrome.")
}

else{
    console.log(word + " is not a palindrome.")
}