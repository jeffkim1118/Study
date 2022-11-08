// 'abc{def}ghi{jkl} ===> cba{def}ihg{lkj}

// let arr = [''];

// function myFunction(string){
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === '{'){
//             arr.push(string[i]);
//         }else if(string[i] === '}'){
//             arr[arr.length-1] += '}';
//             arr.push('')
//         }else{
//             arr[arr.length-1] += string[i];
//         }
//     }
    
//     for(let element = 0; element < arr.length; element++){
//         if(arr[element].split('').includes('{' && '}') === false){
//             arr[element] = arr[element].split('').reverse().join('');
//         }
//         return arr.join('');
//     }
// }

// console.log(myFunction('abc{def}ghi{jkl}'));

let arrTwo = ['']
function versionTwo(stringTwo){
    for(const i in stringTwo){
        if(stringTwo[i] === '{'){
            arrTwo.push(stringTwo[i]);
        }else if (stringTwo[i] === '}'){
            arrTwo[arrTwo.length-1] += '}';
            arrTwo.push('');
        }else{
            arrTwo[arrTwo.length-1] += stringTwo[i];
        }
    }
    for(const string of arrTwo){
        string.includes('{' && '}') === false ? arrTwo[arrTwo.indexOf(string)] = string.split('').reverse().join('') : null
    }
    return arrTwo.join('');
}

console.log(versionTwo('abc{def}ghi{jkl}'))




// let string = 'abacecdedgg';

// let arr = [''];

// for(let i = 0; i < string.length; i++){
//     arr[arr.length-1] += string[i]
// }
// console.log(arr)