function findDuplicates2(nums){
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++){
        const current = nums[i]
        if(hashMap.has(current)) continue
        else hashMap.set(current, true)
    }

    console.log("hashMap", hashMap)
}


nums = [4,3,2,7,8,2,3,1,1,1,1,2,2,2,3,4,4,4]

console.log(findDuplicates(nums));