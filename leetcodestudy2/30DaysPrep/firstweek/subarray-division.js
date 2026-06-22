//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// function birthday2(s,d,m){

//     let sModified = s
//     let potentialSum = []
//     let sum = 0
//     let count = 0

    
//     for(let i = 0 ; i < sModified.length ; i++){
//        sum += s[i]
//        console.log("testando sum",s[i]);
//         if(sum <= d){
//             count++
//             sModified.pop(s[i])
//             potentialSum.push(s[i])
//         }
        
//     }
//     console.log("como ficou esse S modified", sModified);
//     // return sum
//     return potentialSum
//     //quais numeros somo
//     //pra ddar iggual a 4 e 2

// }



const s = [2,2,1,3,2]
const d = 4
const m =2
console.log(birthday(s,d,m))


//https://www.youtube.com/watch?v=fsmFCX5Obp8 
//Muito bom esse video, tem algumas coisas que fiz certo e errado
//count e sum estão certos
//no primeiro for ele fez esse s.length -m
// e ele faz mais um loop pq é pra contar o primeira posição e depois a segunda e assim por diante


function birthday(s,d,m){
    let count = 0;
    let sum = 0

    for(let i = 0 ; i <= (s.length - m) ; i++){

        for( let i2 = 0; i2 < m ; i2++){
            sum = sum + s[i + i2];
         
        }
        if(sum === d){
            count++
        }
        sum =0;
     }

     return count
}