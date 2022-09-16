function palindrome(str) {
    let filteredStr = str.replace(/[^a-z]/gi,'').toLowerCase();
    let letters = [];
    let reverseStr = "";
    console.log(filteredStr)
  
    for(let i = 0; i < filteredStr.length; i++){
      letters.push(filteredStr[i]);
    }
  
    for(let i = 0; i < filteredStr.length; i++){
      reverseStr += letters.pop();
    }
  
    if(reverseStr === filteredStr){
      console.log(true);
    }else{
        console.log(false);
    }
  }
  
  palindrome("My age is 0, 0 si ega ym.");