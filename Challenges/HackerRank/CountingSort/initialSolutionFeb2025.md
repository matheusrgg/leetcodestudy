// https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// https://www.youtube.com/watch?v=cDUpg-VPgAU
//resposta  https://www.youtube.com/watch?v=VIZccMRzOzg
//https://www.youtube.com/watch?v=J02V3gb5KFk


function countingSort(arr){
    const max = Math.max(...arr);
    const countArr = Array(max + 1);
    const result = [];

    for(let i = 0 ; i < arr.length; i++){
        if(!countArr[arr[i]]){
            countArr[arr[i]] = 0;
        }

        countArr[arr[i]]++
    }

    for(let i = 0; i < countArr.length; i++){
        while(countArr[i] > 0){
            result.push(i);
            countArr[i]--;
        }
    }

    return result;
}

console.log(countingSort([1,5,5,3,2,2,3,3,1,4]))




function countingSort(arr){
    let fArr = new Array(100).fill(0)
    for(let i=0; i<arr.length; i++){
        fArr[arr[i]]++
    }
    return fArr
}