/*
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

//My Answer 
function changeList(a, b){
  let newList = []; 
  for(let i = 0; i < a.length; i++){
    if(i % 2 === 0){
      newList.push([a[i], b[i]]);
    } else{
      newList.push([b[i], a[i]]);
    }
  }
  return newList;
}

console.log(changeList([1, 2, 3, 4], ["a", "b", "c", "d"]));

//Answer
const a = prompt('입력하세요').split(' ');
const b = prompt('입력하세요').split(' ');
let c = [];
let count = 0;

a.forEach(function(e, i){
  if (count%2 === 0){
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
  count++;
});

console.log(c);

//[[1,'a'],['b',2],[3,'c'],['d',4]]
