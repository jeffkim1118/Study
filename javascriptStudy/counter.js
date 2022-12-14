//check if each words are longer than 5 characters
let arr = ['apple', 'orange', 'banana', 'watermelon', 'grapes']

// let charCounter = 0;

//First way
// for(const fruit of arr){
//   for(const char in fruit){
//     charCounter+=1
//   }
//   if(charCounter > 5){
//     console.log(true);
//     charCounter = 0;
//   }else{
//     console.log(false)
//     charCounter = 0;
//   }
// }

//Second way
// for(const fruit of arr){
//   fruit.split('').map((char) => {charCounter++})
//   if(charCounter > 5){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
//   charCounter = 0;
// }


// Third way (Without a counter)
let filteredResult;
for(let i = 0; i < arr.length; i++){
    filteredResult = arr.filter((fruit) => fruit.length > 5)
}
filteredResult.map((fru) => fru.length > 5 ? console.log(true) : console.log(false))


