
// how to remove element from the array in javascript
//https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
//https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#:~:text=You%20can%20remove%20the%20element,of%20the%20element%20to%20remove.&text=The%20splice%20method%20can%20accept%20many%20arguments.


function getMaximumCharge(charge, number)
{
    
    //primeiro charge
    charge.splice(number, 1)
    const newNumber = number -1

    console.log(newNumber);
    //confere se tem um item na esquerda e na direita
   if(newNumber > 0 && newNumber < charge.length -1){
    //ok ele tem item na esquerda e diretira
    //preciso soma os elementos 
    console.log( charge[newNumber -1], charge[newNumber + 1]);
    const sum = charge[newNumber -1] + charge[newNumber + 1]
    console.log("tem direita e esquerda", sum);


   }
    // let newArray = []
    // for (let index = 0; index < charge.length; index++) {
    //     const element = charge[index];
    //     return element
        
    // }
}




const charge = [-2,4,9,1,-1]
console.log(getMaximumCharge(charge, 3));