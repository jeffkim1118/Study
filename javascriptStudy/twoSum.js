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
    let ans = [];
    const chart = {};
    for(let i = 0; i < nums.length; i++){
        if(chart[target - nums[i]] !== undefined){
            ans[0] = parseInt(chart[target-nums[i]]);
            ans[1] = i;
            return ans
        }
        chart[nums[i]] = i
    }
 };
 
console.log(twoSum([2,7,11,45], 9))
console.log(twoSum([3,2,4], 6))