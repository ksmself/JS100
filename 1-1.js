let nums = [100, 200, 300, 400, 500]; 

// nums에서 400, 500 삭제하는 code

//pop 이용
nums.pop(); 
nums.pop(); 
console.log(nums);

//splice 이용
nums.splice(3, 2); 
console.log(nums);

/* 
splice() method changes the contents of an array by removing or
replacing existing elements and/or adding new elements in place. 

let arrDeletedItems = array.splice(start, [, deleteCount[, item1[, item2[, ...]]]])

start: The index at which to start changing the array. 
deleteCount(Optional): An integer indicating the number of elements in the array to remove from start. 
item1, item2, ...(Optional): The elements to add to the array, beginning form start. If you do not specify any elements,
splice() will only remove elements from the array. 
Return value: An array containing the deleted elements. 
*/

//Answer는 pop 이용한 첫 번째 풀이! 
