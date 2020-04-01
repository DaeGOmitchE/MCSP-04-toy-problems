//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]
//What? Return an array with no subarrays with flatten function
//How?
//1.Your function returns Array with no subarrays
//2.first turn the current array into a string
//3.turn the newly created string into an array

function flatten(array) {

    //declare a result variable empty array
    let result = [];
    ///make a helper function
    let assist = (array) => {
        //iterate over the input array
        for (let i = 0; i < array.length; i++) {
            //make a variable for the element at each index
            let ele = array[i];
            //the element is not and array 
            //store in result variable
            if (!Array.isArray(ele)) {
                result.push(ele);
                //else
            } else {
                //call helper function on the arrayelement
                assist(ele);
            }
        }
    }
}

    //turn string into a new array


