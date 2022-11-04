function rot13(str) {
    const chart = {
      'A' : 'N',
      'B' : 'O',
      'C' : 'P',
      'D' : 'Q',
      'E' : 'R',
      'F' : 'S',
      'G' : 'T',
      'H' : 'U',
      'I' : 'V',
      'J' : 'W',
      'K' : 'X',
      'L' : 'Y',
      'M' : 'Z',
      'N' : 'A',
      'O' : 'B',
      'P' : 'C',
      'Q' : 'D',
      'R' : 'E',
      'S' : 'F',
      'T' : 'G',
      'U' : 'H',
      'V' : 'I',
      'W' : 'J',
      'X' : 'K',
      'Y' : 'L',
      'Z' : 'M',
      '!' : '!',
      '?' : '?',
      '.' : '.',
      ',' : ','
    }
  
    let result = [];
  
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            result.push(' ')
        }
      for(const prop in chart){
        if(str[i] === chart[prop]){
          result.push(prop)
        }
      }
    }
    console.log(result.join(''));
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")