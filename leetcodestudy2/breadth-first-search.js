/**

--- Base Problem: Statement ---

A DashMart is a warehouse run by DoorDash that houses items found in convenience stores, grocery stores, and restaurants. We have a city with open roads, blocked-off roads, and DashMarts. 

City planners want you to identify how far a location is from its closest DashMart.

You can only travel over open roads (up, down, left, right).

Locations are given in `[row, col]` format.

Provided:
- city: List[List[str]
- locations: List[List[int]]

Return:
- answer: List[int]

--- Example 1 ---

[
#     0    1    2    3    4    5    6    7    8    
    ['X', ' ', ' ', 'D', '1', ' ', 'X', ' ', 'X'], # 0
    ['X', ' ', 'X', 'X', '0', '1', ' ', ' ', 'X'], # 1
    [' ', ' ', ' ', 'D', 'X', 'X', ' ', 'X', ' '], # 2
    [' ', ' ', ' ', 'D', ' ', 'X', ' ', ' ', ' '], # 3
    [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', 'X'], # 4
    [' ', ' ', ' ', ' ', 'X', ' ', ' ', 'X', 'X']  # 5
]
//Breadth first Search = moving away
//recursive is not the way , random paths 
//Started from [1 ,4]
//first check direction that I can go
//up, down, left, right
//up and right (marking the spots, that uve been to)
//when u find a Dash Mart u +1
//right
//up, down, left, right
//
//Check if I can go this way
//How can I store the ways I am going
//Which data structure, can I use?
//Que

// ((1,4), 0) = queue

stariing point: (1,4) current_distance = 0
from starting point: Try to explore all 4 directions

// queue = [((1,5), 1), ((0,4),1)], 

directions = [(1,0), (-1,0)]

for each direction: starting_row + 1, starting_colum+ 0  - this just identifies the possible new positions



(1,5), 1)

' ' represents an open road that you can travel over in any direction (up, down, left, or right).
'X' represents an blocked road that you cannot travel through. 
'D' represents a DashMart.

locations = [
    [200, 200],
    [1, 4], 
    [0, 3],
    [5, 8],
    [1, 8], 
    [5, 5]    
]

answer = [-1, 2, 0, -1, 6, 9]

--- Example 2 ---

    [
        ['D', 'X', 'X'],
        ['D', 'D', 'X']
    ]

    locations = [[0, 2], [1, 1], [1, 2]]
    answer = [-1, 0, 1]
 */


    function solve(city, locations) {
        // Implementation goes here
        let initialRowLocation = locations[0]
        let initialColumnLocation = locations[1]
        
        let directions = [[1,0], [-1,0], [0,1], [0,-1]]
                
        console.log("dubbugger",initialColumnLocation, initialRowLocation)
        
        // create a queue and put your starting position in it
        let queue = []
        queue.push([initialRowLocation, initialColumnLocation, 0])
        
        // while there are elements in the queue, do the algorithm
        while (queue.length > 0) {
            let item = queue.shift()
            let currentRow = item[0]
            let currentCol = item[1]
            let currentDist = item[2]
            //up, down , left or right
            
            for (let direction of directions) {        
                let newRow = currentRow + direction[0]
                let newCol = currentCol + direction[1]
            
                if (isPositionValid(newRow, newCol)) {
                    //increment the distance
                    let newDist = currentDist + 1
                    queue.push([newRow, newCol, newDist])
                    // append to the queue
                    // [newRow, newCol, newDist]
                }
                
                //start to move in the directions up, down, left or right    
                }
                
            }
        
        for( let i = 0 ; i < city.length ; i++){
            console.log("inside city loop", city[i])
        }
    }
    
    function isPositionValid(row, col) {
        // TODO
    }
    
    const locations =[1,4]
    const city = [
     
        ['X', ' ', ' ', 'D', '1', ' ', 'X', ' ', 'X'], 
        ['X', ' ', 'X', 'X', '0', '1', ' ', ' ', 'X'], 
        [' ', ' ', ' ', 'D', 'X', 'X', ' ', 'X', ' '], 
        [' ', ' ', ' ', 'D', ' ', 'X', ' ', ' ', ' '], 
        [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', 'X'], 
        [' ', ' ', ' ', ' ', 'X', ' ', ' ', 'X', 'X']  
    ]
    console.log(solve(city, locations))
    //do a function to check if it is a valid sport
    //--inside the city
    //--no X
    
    