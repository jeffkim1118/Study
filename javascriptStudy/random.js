console.log(Math.random() < 0.5)

function getRandom(max, min){
    return Math.random() * (max-min) + min;
}
console.log(getRandom(5,2))
