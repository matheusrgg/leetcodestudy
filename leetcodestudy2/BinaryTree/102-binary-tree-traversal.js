



function levelOrder(root) {
    
    if (!root) return [];
    let queue = new Array();
    queue.push([root, 0]);

    let res = new Array();
    let level = 0;
    let children = new Array() 

    while(queue.length){
        let [r, l] = queue.shift();
        if(!r) continue;
        if(level != l){
            res.push(children);
            level = l;
            children = [];
        }
        children.push(r.val);
        queue.push([r.left, l+1])
        queue.push([r.right, l+1])
    }

    res.push(children);
    return res;

}




const root = [3,9,20,null,null,15,7]

console.log(levelOrder(root));







// https://www.youtube.com/watch?v=TAhfpo5gLOw

// manooo por mais que não entendii 
// faltou coisa no código dela que resolvi kkkk
// o if faltando o case da array vazia kkkkk


