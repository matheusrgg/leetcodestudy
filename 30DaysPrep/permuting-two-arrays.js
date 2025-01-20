

// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one


function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
   B.sort((a, b) => b - a);

    console.log(A,B);
   for (let i = 0; i < A.length; i++) {
    console.log(
        "pra que somar", A[i] + B[i]
    );
       if (A[i] + B[i] < k) return "NO";
   }

   return "YES";

}



twoArrays(2, [2,1,3],[7,8,9])