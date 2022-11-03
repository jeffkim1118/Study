// Reverse a given string but characters inside of "{}" must not be reversed.

function reverseString(){
    // let result = s.split('').reverse().replace(/\{.*?\}/g, a => reverseString(a))
    // let sub = s.find(/\{.*?\}/g)
    // console.log(sub)

    // let arr = ['sdfosfddf', '{sfsdf}', 'fddsafsd']

    let string = 'abs{dkjfklsd}dkfjsdkf'
    
    

    // let arr = [''];

    // for(let i = 0; i<string.length;i++){
    //     if(string[i] === '{'){
    //         arr.push(string[i])
    //     }else if(string[i] === '}'){
    //         arr[arr.length-1] += '}'
    //         arr.push('');
    //     }else{
    //         arr[arr.length-1] += string[i]
    //     }
    // }

    string.split('')

    console.log(arr)

    // console.log(s.split(/(\w+(?=\{|$)|\{\w+\})/g))
    // let startIndex;
    // let endIndex;
//    let stringArray = s.split('');
//    if(stringArray.includes('{' || '}')){ 
//     let reversedArray = stringArray.reverse();
//     for(let i = 0; i < reverseString.length; i++){
//         if(reversedArray[i] === '}'){
//             startIndex = reversedArray.indexOf(reversedArray[i])
//         }else if(reversedArray[i] === "{"){
//             endIndex = reversedArray.indexOf(reversedArray[i])
//         }
//     }
//    }else{
//     console.log(s)
//    }

}reverseString()
// reverseString('abs') // expect: 'sba'
// reverseString('abcd{ef}ghij')  // expect: 'jihg{ef}dcba'
// reverseString('abcd{dfe}dfsaf{bsd}') // expect: '{bsd}fasfd{dfe}dcba




// Reverse words in a string
// function reverseWords(s){
//     let newArray = []
//     s.split(' ').forEach((word)=>newArray.push(word.split('').reverse().join('')));
//     return newArray.join(' ');
// }
// reverseWords("Let's take Leetcode contest")

// let nums1 = [1,2,2,1]
// let nums2 = [2,2]

// function intersection(nums1, nums2){
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2)
//     console.log(set1)
//     console.log(set2)



//     // const set2 = new Set(nums2);
//     // const set3 = new Set();
//     // for (const val of set1) {
//     //     if (set2.has(val)) {
//     //         set3.add(val);
//     //     }
//     // }
//     // console.log(Array.from(set3));
// }
// intersection(nums1, nums2)