function checkBracesString(s){
    let stack = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === '{'){
            stack.push(s[i])
        }else if (s[i] === '}'){
            if(stack.length === 0){
                return false
            }else if(stack[stack.length -1] === '{'){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(checkBracesString('{{{}}}'))    // expecting: true
console.log(checkBracesString('}{{{}}}}}}'))   //expecting: false