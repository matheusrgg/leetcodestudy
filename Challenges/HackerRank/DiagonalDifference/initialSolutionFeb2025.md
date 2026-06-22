// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
//https://www.youtube.com/watch?v=0_PRLz85U6I



function diagonalDifference(arr){
    var n = arr[0].length;
    var leftSum = 0;
    var rightSum = 0;
    
    for (var i = 0, j = n - 1; i < n; i++, j--) {
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    
    var difference = leftSum - rightSum;
    
    return Math.abs(difference);

}