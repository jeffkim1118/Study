var numDupDigitsAtMostN = function(n) {
    let result = [];
    let newHashMap = new Map();


    for(let x = 1; x <= n; x++){
        result.push(x);
        
    }
    // console.log(result)

    for(let i = 0; i < result.length; i++){
        while(result[i] > 0){
            let rem = parseInt(result[i] % 10);
            newHashMap[rem]++
            console.log(rem)
            console.log(typeof newHashMap[rem])
            result[i] = result[i] / 10
        
        }
    }
    // while(n > 0){
    //     let endDigit = n % 10;
    //     newHashMap[endDigit]++;
    //     n = n / 10
    // }
    // for(let i = 0; i < newHashMap.length; i++){
    //     if(newHashMap[i] > 1){
    //         result.push(newHashMap(i))
            
    //     }
    // }
    // console.log(result)
    
};

numDupDigitsAtMostN(20)