/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */
//1.input- a sorted array
//2.output- locate the index of an element in the array
//3.constrant-
//4.edgecase-

var binarySearch = function(array, target) {
    //make a begining and ending variable for indexes
    var begIndex = 0;
    var endIndex = array.length - 1;

    //while the begining index is less than equal to ending index
    //make the largest element mid index variable
    while(begIndex <= endIndex) {
     var midIndex = math.floor((begIndex + endIndex)/2);
    }

    //if mid index and target index match
     If (target === array[midIndex]) {

     }
     //search left side of array
     if (target < array[midIndex]){
         ///make another ending index variable to narrow the search
         var endIndex = midIndex - 1;
         
              }
        
         ///search right side of array
         if(target > array[midIndex]) {
             ///make another begining index variable to narrow the search
             var begIndex = midIndex + 1;
             
             //if not found loop again 
         } else {
             console.log("element not found, looping again)


//if element not found loop again
        else if { 
     

    }




};
