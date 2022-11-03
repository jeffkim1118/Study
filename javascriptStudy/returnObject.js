let string3 = 'dksfjdsklfjdksfdskfjdkfd' // {d:’d’, k:’k’…}

function returnObject(s){
    let newObj = {};
    // First Way
    // for(let i = 0; i < s.length; i++){
    //     newObj[s[i]] = s[i]
    // }

    // Second Way
    let result = s.split('').map((y) => newObj[y] = y)


    // Third Way
    // s.split('').forEach((x) => newObj[x] = x)

    // Fourth Way
    s.split('').reduce((x) => newObj[x] = x)
    console.log(newObj)
}
returnObject(string3);