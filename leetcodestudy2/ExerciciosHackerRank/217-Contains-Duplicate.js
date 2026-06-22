



function containsDuplicate(nums){

const stack = []

    for(let num of nums){

        if(stack.includes(num)){
            return true
        }else{
            stack.push(num)
        }

    }

    return false
}


console.log(containsDuplicate([1,2,3, 4, 3]));




// -------- Jeito Nutela

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     let set = new Set();
//     for(let num of nums){

//     if(set.has(num)){
//         return true
//     }else{
//         set.add(num)
//     }

  
// }
// return false
// };