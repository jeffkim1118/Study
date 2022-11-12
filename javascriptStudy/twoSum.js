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
    const resultChart = {};
    let arr = [];
    let insideArray = [];
    for(let i = 0; i < nums.length; i++){
        // find if the number exist in the chart
        // if the number exist, store that in resultChart obj
        if(chart[target - nums[i]] !== undefined){
            resultChart[target-nums[i]]= nums[i]
            
        }
        chart[nums[i]] = i
        
    }
    insideArray.push(resultChart)
    arr.push(insideArray)
    console.log(arr)
 };
 twoSum([2,7,11,45,8,10], 18)
 twoSum([2,7], 9)
 twoSum([2,7,11,45,8,10], 100)
// console.log(twoSum([2,7,11,45,8,10], 18))
// console.log(twoSum([3,2,4], 6))