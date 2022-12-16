function LongestPalin(str){
    if(!str) return "";
    if(str.length == 1) return str;

    let start = 0;
    let end = 0;

    for(let i = 0; i < str.length; i++){
        const l1 = getLength(str, i, i);
        const l2 = getLength(str, i, i+1);

        const len = Math.max(l1, l2);
        if(len > end - start){
            start = Math.ceil(i - ((len-1) / 2));
            end = i + (len / 2);
        }
    }
    return str.substring(start, end+1)
}

function getLength(str, left, right){
    if(!str || left > right) return 0;

    while(left >= 0 && right < str.length && str[left] == str[right]){
        left--;
        right++;
    }
    return right - left - 1
}

console.log(LongestPalin('aaabba'))