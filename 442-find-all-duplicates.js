

function findDuplicates(nums) {

    let stack = new Set();
    let stackDuplicates = new Set();

    for(num of nums){
        if(stack.has(num)){
            stackDuplicates.add(num)
        }else{
            stack.add(num)
        }
    }


    const stackAray = Array.from(stackDuplicates);
    return stackAray

}

nums = [4,3,2,7,8,2,3,1,1,1,1,2,2,2,3,4,4,4]

console.log(findDuplicates(nums));