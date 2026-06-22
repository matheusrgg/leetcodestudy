

function removeDuplicates(s){
  
     const stack = [];

     for(let char of s){
        if(stack.length > 0 && stack[stack.length -1] === char){
            stack.pop()
        }else{
            stack.push(char)
        }
     }
     
     console.log(stack.join(''));
}

const s = "azxxzy"
//"ay"
console.log(removeDuplicates(s))