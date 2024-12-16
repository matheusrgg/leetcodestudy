


//essa subtração tava errada poura
// function getTheSmallestNumber(nums){
//     let smallest = nums[0];
//     for(let i = 0 ; i< nums.length ; i++){
//              if(nums[i] < smallest && nums[i] !== 0) {
//                     smallest = nums[i]
//             }  
//     }
//     // console.log(smallest);
//     return smallest
// }

function getTheSmallestNumber(nums) {
    let smallest = Infinity; // Inicialize com um valor muito alto
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] < smallest) { // Considere apenas números maiores que 0
            smallest = nums[i];
        }
    }
    return smallest === Infinity ? 0 : smallest; // Retorna 0 se não houver números maiores que 0
}

function subtractFromArrayBySmallestNumber(nums){

    const newArray = []
        for (let index = 0; index < nums.length; index++) {
            if(nums[index] !== 0){
                  const element = nums[index] - getTheSmallestNumber(nums)
                  newArray.push(element)
            }else{
                newArray.push(nums[index] )
            }
        }
    return newArray;
}


function minimumOperations(nums){
    if(nums[0] == 0 && nums.length == 1) {
        return 0
    }else if(nums.length == 1 ){
        return 1 
    }
    let count = 0
    while (Math.max(...nums) > 0) { 
        nums = subtractFromArrayBySmallestNumber(nums); 
        count ++
    }
    return count
  
}


// const nums = [1,5,0,3,5]
// const nums = [4,2,3,4]
// const nums = [-2,4,9,1,-1]
// const nums = [0]
const nums = [1]
// const nums = [1,2,3,5]
console.log(minimumOperations(nums));