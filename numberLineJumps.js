function kangaroo(x1, v1, x2, v2) {
    let val1 = x1
    let val2 = x2
    let counter = 1
    for(let i = 0 ; i < counter ; i ++)
    {
        counter ++
        console.log("before:", x1,x2)
        x1 += v1
        x2 += v2
        
        console.log("after",x1,x2)
        
        if(x1 == x2)
        {
            return "YES"
            break
            
        } else if(x1 <=x2 && v1 <= v2)
        {
            return "NO"
            break
        } else if (val1 < val2 && x1 > x2)
        {
            return "NO"
        }
       
    }
}
kangaroo(2,1,1,2)