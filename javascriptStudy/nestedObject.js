// function myFunction(obj){
//     // if(obj["a"] in obj){
//     //     if(obj["a"["b"]] in obj["a"]){
//     //         console.log(obj["a"["b"]])
//     //     }else{ return undefined }
//     // }else{
//     //     return undefined
//     // }
//     console.log("a" in obj)
//     console.log("b" in obj.a)
//     console.log("c" in obj.a.b)
// }
// myFunction({a:{b:{c:3}}})

var size = 8; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);