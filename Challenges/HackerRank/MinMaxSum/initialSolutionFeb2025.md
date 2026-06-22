//https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one


function miniMaxSum(arr) {
    // Write your code here

    const sortArray = arr.sort(function(a,b){return a-b})
    let sum1 = 0
    for( let i =0 ; i < 4 ; i++){
        sum1 += sortArray[i]
    }


    let sum2 = 0 
    for(let i = 1 ; i < sortArray.length ; i++){
        sum2 +=sortArray[i]
    }

  console.log(sum1, sum2);
   

}


// const arr = [1,2,3,4,5]
// const arr = [1,3,5,7,9]
const arr = [7,69,2,221,8974]
miniMaxSum(arr)