var kClosest = function(points, k){
    let dist = function(x,y){
        return x*x + y*y;
    }

    let maxHeap = new MaxPriorityQueue();

    for(let [x,y] of points){
        let d = dist(x,y);
        maxHeap.enqueue([x,y], d);
        if(maxHeap.size() > k){
            maxHeap.dequeue();
        }
    }

    let res = [];
    while(maxHeap.size()){
        res.push(maxHeap.dequeue().element());
    }

    return res;
}



// https://www.youtube.com/watch?v=-gdyW2B8bqE&list=PL3eqOYN9nzwVgF082t-3yIkdxOWtBFL7f&index=13
//aqui no video eu to entendendo até


// 3m
//We know that is nlogn
// time complexity

// we can you n log k using the heap approach

// 5m - Comeeça esse papo de Heap 

