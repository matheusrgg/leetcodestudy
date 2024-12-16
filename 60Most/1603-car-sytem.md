
// https://leetcode.com/problems/design-parking-system/description/?envType=problem-list-v2&envId=7p5x763&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUkVRVUVOQ1kifV0%3D&page=1
// https://www.youtube.com/watch?v=HxXO5GBYvZ0



//outra resposta

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
function ParkingSystem(big, medium, small) {
    this.spaces = {
        1: big,    // Spaces for big cars
        2: medium, // Spaces for medium cars
        3: small   // Spaces for small cars
    };
    console.log("Parking system initialized:", this.spaces);
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    console.log('car type');
    console.log('Attempting to park car type:', carType);
    if (this.spaces[carType] > 0) {
        this.spaces[carType]--;
        console.log('Car parked. Remaining spaces:', this.spaces);
        return true; // Successfully parked
    } else {
        console.log('No space available for car type:', carType);
        return false; // No space available
    }
};



const commands = ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"];
const args = [[1, 1, 0], [1], [2], [3], [1]];

let parkingSystem = null;
const results = [];

// Processing commands
for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "ParkingSystem") {
        const [big, medium, small] = args[i];
        parkingSystem = new ParkingSystem(big, medium, small);
        results.push(null); // No output for constructor
    } else if (commands[i] === "addCar") {
        const [carType] = args[i];
        const result = parkingSystem.addCar(carType);
        results.push(result);
    }
}

console.log('Results:', results); // Final output




/** 
 *
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */


// Example 1:


// Output
// [null, true, true, false, false]