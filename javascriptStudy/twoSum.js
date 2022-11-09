var twoSum = function(nums,target) {
    // for(let i = 0; i < nums.length; i++){
    //      let n = nums[i]
    //      for(let j = i+1; j < nums.length; j++){   
    //          let n2 = nums[j]
    //          if(n+n2===target){
    //              return [i,j]
    //          }
    //      }
    //  }

    const chart = {};
    for(let i = 0; i < nums.length; i++){
        let temp = nums[i];
        chart[temp] = i;
        if(chart[target-temp] >= 0){
            return [chart[target-temp], i]
        }
    }
 };
 
console.log(twoSum([2,7,11,45], 9))