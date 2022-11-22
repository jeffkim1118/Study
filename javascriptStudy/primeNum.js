// Check if each number is a prime numbers

function Prime(arr){
    let result = [];
    return arr.map((num) => {
        if(num < 2){
            return false
        }
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false
            }
        }
        return true
    })
    
}

console.log(Prime([1,53,63,2,23,64,21,3]))