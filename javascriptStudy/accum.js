// function accum(s) {
//     let result = ''
//     array = s.toLowerCase().split('')
//     for(let i = 0; i < array.length; i++){
//       result += array[i].toUpperCase()
//       for(let j = i; j > 0; j--){
//         result += array[i]
//         console.log(result)
//       }
//       if(i < array.length - 1){
//         result += '-'
//       }
//     }
//     return result;
//   }

const accum = s => {
    return s.toLowerCase().split('').map((c,index) =>
        c.toUpperCase() + c.repeat(index)
    ).join('-')
}

  console.log(accum('abc'))