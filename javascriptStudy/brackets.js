 // true or false

 // Function for checking the end part of the array;
// function peek(array){
//     return array[array.length -1]
// }

function bracket(s){
    let array = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === '{'){
            array.push(s[i])
        }else if (s[i] === '}'){
            if(array.length === 0){
                return false
            }else if(array[array.length -1] === '{'){
                array.pop();
            }else{
                return false;
            }
        }
    }
    return array.length === 0;



    // s.split('').forEach((letter) => {
    //     if(letter === '{'){
    //         array.push(letter);
    //     }else if(letter === '}'){
    //         if(array.length === 0){
    //             return false
    //         }else if(array[array.length-1] === '{'){
    //             array.pop();
    //         }else{
    //             return false
    //         }
    //     }
    // })
    // return array.length === 0;




    //iterate through every letter in a string
    // if the letter is an opening paranthese, push it on the array
    // if the letter is an closing, make sure it has a matching opening paren


    // counter = 0

    // for(c of s){
    //     if(c === '{'){
    //         counter++;
    //     }
    //     else if(c === '}' && --counter < 0) {
    //         console.log(false)
    //     };
    // }
    // console.log(counter === 0);

    // for(c of s){
    //     if(c === "{"){
    //         counter++;
    //     } else if(c === "}"){
    //         counter--;
    //     }
    // }
    // console.log(counter === 0)
}

console.log(bracket('{}{}{}{}{{{{}}}{{{}{}{}'))
console.log(bracket('{{}}'))
console.log(bracket('{{}{}{}}}'))
console.log(bracket('{{}}}{'))