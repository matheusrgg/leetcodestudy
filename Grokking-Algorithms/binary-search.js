"use strict";

/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
function binary_search(list, item) {
  let low = 0;

  let high = list.length - 1

  console.log("Entendendo high:" ,high);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log("entendendo mid:", mid)
    const guess = list[mid];

    console.log("Entendendo guess", guess)
    //primeira vez que usou o item aqui
    if (guess === item) {
      return mid;
    } else if (guess > item) {
        console.log("entrei no gues > item");
      high = mid - 1;
    } else {
        console.log("entrei no else");
      low = mid + 1;
    }
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log("Resposta", binary_search(my_list, 3)); // 1
// console.log(binary_search(my_list, -1)); // null