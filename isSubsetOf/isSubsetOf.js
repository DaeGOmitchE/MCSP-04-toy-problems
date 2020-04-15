/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 *///I. array of elements, O. boolean C. no array of array or array of objects E.//

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  //declare variable for subArray
  let subArr = [];
  //iterate over the subArray
  for ( let j = 0; j < subArr.length; i++) {
    //iterate over the arr (the 'parent' arr)

    for( let i = 0; i < arr.length; i++) {
      //if element in arr matches element in subArray
    
      if (subArr[j] === arr[i]) {
        //return true
        return true;
        //otherwise 
      } else {
        //return false
        return false;
      }
    }
};
