/*
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

//My Answer 
const num = prompt("숫자 10개를 입력해주세요").split(" ");
let newNum = []; 
num.forEach(nums => {
  newNum.push(parseInt(nums, 10)); 
});
let max = newNum[0];
newNum.forEach(number => {
  if(number > max){
    max = number; 
  }
}); 
console.log(max); 

//Answer 
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
  return parseInt(n, 10);
});

numbers.sort((a, b) => {
  return b-a;
});

console.log(numbers[0]);
