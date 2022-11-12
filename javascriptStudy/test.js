function myfunction(arr){
    const obj = {}
    const obj2 = {}
    let resultArray = []

    for(let i =0 ; i < arr.length; i++){
       
        if(arr[i] % 2 === 0){
            obj[i] = arr[i]
            // resultArray.push(obj)
        }else{
            obj2[i] = arr[i]
            // resultArray.push(obj2)
        }
        // console.log(obj)
    }
    resultArray.push(obj)
    resultArray.push(obj2)
    // arr.map((num) => {
    //     obj[arr.indexOf(num)] = arr[arr.indexOf(num)]
        
    // })
   
    return resultArray
}
console.log(myfunction([6,8,9,10,34]))