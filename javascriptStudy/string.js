function myfunction(input){
    // const arr = [1,2,3,4,5,6,7,8,9]
    // console.log(input.split('').filter(e => arr.includes(Number(e))).join(''))
    return input.split('').filter(e => !!Number(e) && Number(e) === 0).join('')
}
console.log(myfunction('djfks02423'))