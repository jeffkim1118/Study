// Reverse a given string but characters inside of "{}" must not be reversed.

// function reverseString(s){
    
// }
// reverseString('abcd{ef}ghij')  // expect: 'jihg{ef}dcba'


// Reverse words in a string
// function reverseWords(s){
//     let newArray = []
//     s.split(' ').forEach((word)=>newArray.push(word.split('').reverse().join('')));
//     return newArray.join(' ');
// }
// reverseWords("Let's take Leetcode contest")

let nums1 = [1,2,2,1]
let nums2 = [2,2]

function intersection(nums1, nums2){
    const set1 = new Set(nums1);
    const set2 = new Set(nums2)
    console.log(set1)
    console.log(set2)
    // const set2 = new Set(nums2);
    // const set3 = new Set();
    // for (const val of set1) {
    //     if (set2.has(val)) {
    //         set3.add(val);
    //     }
    // }
    // console.log(Array.from(set3));
}
intersection(nums1, nums2)