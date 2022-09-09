function timeConversion(s) {
    if(s.indexOf('PM') > -1){
        // '00:00:00AM' -> ['00', '00', '00']
        const arr = s.slice(0,8).split(":");
        if(arr[0] == 12){
            arr[0] = '12';
        }else{
            arr[0] = Number(arr[0])+12
        }
        console.log(arr.join(':'));
    }else{
        const arr = s.slice(0,8).split(":");
        if(arr[0] == 12){
            arr[0] = '00';
        }
        console.log(arr.join(':'));
    }
}

timeConversion("07:05:45PM")