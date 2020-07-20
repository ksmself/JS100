/*
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
입력 : 10 2
출력 : 5 0
*/

//My Answer 
const n = prompt("두 숫자를 입력해주세요.").split(" "); 
const share = n[0] / n[1]; 
const rest = n[0] % n[1]; 
console.log(share, " ", rest); 

//Answer 
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10)); //floor는 소수점 없애기 위한 용도 
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
