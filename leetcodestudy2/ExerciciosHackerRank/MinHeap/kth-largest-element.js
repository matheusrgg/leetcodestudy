//Acho que a primeira coisa é identificar que 
//tipo de exercício é
// matemática, manipulação de string, array, numero, data
//aqui é array com número

//Input 
// nums = [3,2,1,5,6,4] , k =2
// nums = [3,2,3,1,2,4,5,5,6], k=4

// Output
// 5
// 4


const numbersArrays = [3,2,1,5,6,4]

console.log("sorted functoin ",numbersArrays.sort(( a, b)=>{
    //6,5,4,3,2,1
    return b-a
}).indexOf(2-1))

function checkPosition(arrayNumbers, position){
    for(i= 0; i < arrayNumbers.length ; i++){

        console.log(arrayNumbers[i], i)
    }
}


console.log(checkPosition(numbersArrays, 2))



// https://www.youtube.com/watch?v=4O6fuT9lJeE
//Usando Min Heap


//learning minHeap in Leetcode
let minHeap = new MinPriorityQueu();
//return each of the numbers
for(let num of nums){
    //enqueue minHeap
    minHeap.enqueue(num);
    //check if the size is greater then K
    //remove the first element, igual na explicação do video
    if(minHeap.size() > k) minHeap.dequeue();

}

return minHeap.front().element;