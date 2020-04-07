// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
//I- an unsorted array
//O-a sorted array w/ largest value at the end of the array
//C- assuming we leave the original array unchanged
//E-

    function bubbleSort(array) {
        //copy original array
         var isSortedArr = array.slice();
         //iterate thur isSortedArr
         for ( var i = 0; i < isSortedArr.length; i++){
           if (isSortedArr[i] >isSortedArr[i+1]) {
             //swap
             var swap = isSortedArr[i];
            isSortedArr[i] = isSortedArr[i];
            isSortedArr[i+1] = swap;
           
     
         }
     
       return isSortedArr;
     }
     
     bubbleSort([9, 6, 3, 2]);

};
