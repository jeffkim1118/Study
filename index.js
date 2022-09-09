function timeConversion(s) {

    let res;
    let hour = s.substring(0,2)
    if(s[8] === 'P' && parseInt(hour) === 12) res = hour
    else if(s[8] === 'A' && parseInt(hour) === 12) res = "00"
    else if(s[8] === 'P') res = 12+parseInt(hour)
    else res = hour
    
    console.log( String(res) + s.substring(2,8))
    
}

timeConversion("24:01:00PM")