https://www.hackerrank.com/challenges/one-month-preparation-kit-sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two


function sockMerchant(n, ar){



 

    let counts = {}; // Object to store counts

    // Count occurrences of each number
    for (let num of ar) {
        console.log(num, counts);
        console.log("Vendo qual o valor do counts",counts[num]);
        counts[num] = (counts[num] || 0) + 1;
    }

    console.log("counts no final do loop", counts);

    let totalPairs = 0;

    // Count pairs for each number
    for (let count of Object.values(counts)) {
        totalPairs += Math.floor(count / 2); // Divide by 2 and ignore remainder
    } 
 
    console.log("tem??", totalPairs); 
}


console.log( sockMerchant(9, [10,20,20,10,10,10,20,30]));