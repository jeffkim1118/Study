function checkCashRegister(price, pay, cid){
    let change = pay*100 - price*100;
    let cidTotal = 0;
    for(let elem of cid){
        cidTotal += elem[1]*100
    }
    if(cidTotal < change){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(cidTotal === change){
        return {status: "CLOSED", change: cid}
    }else{
        cid = cid.reverse();
        let moneyUnit = {"QUARTER":25, "DIME":10, "NICKEL": 5, "PENNY": 1};
        for(let elem of cid){
            // convert all elements in the arrays of array to pennies.
            elem[1] = elem[1] * 100
            let holder = [elem[0], 0]
            if(change >= moneyUnit[elem[0]] && elem[1] > 0){
                change -= moneyUnit[elem[0]]
                elem[1] -= moneyUnit[elem[0]]
            }
        }
    }
}






checkCashRegister(2.25, 3, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25]])