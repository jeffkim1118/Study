function mean(array){
    let result = 0;

    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    return Math.floor(result / array.length)
}

function median(array){
    arr = array.sort((a,b) => a - b)
    if(arr.length % 2 !== 0){
        return arr[Math.floor(array.length/2)]
    }else{
        let mid1 = arr[arr.length/2];
        let mid2 = arr[arr.length/2-1];
        return (mid1+mid2) / 2
    }
}

function mode(array){
    const chart = {};

    array.forEach(ele => {
        if(!chart[ele]) chart[ele] = 0
        chart[ele]++
    })

    let result = []
    let max = 0
    for(let key in chart){
        if(chart[key] > max){
            result = [key]
            max = chart[key]
        }else if(chart[key] === max){
            result.push(key)
        }
    }

    if(Object.keys(chart).length === result.length){
        result = []
    }
    return result
}


let array = [1,2,4,5,5,5,6]
console.log(mean(array))
console.log(median(array))
console.log(mode(array))