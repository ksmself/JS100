/*
공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

//My Answer 
const mul = prompt("숫자 두 개를 입력해주세요").split(" "); //mul = [2, 3]
const res = mul[0] ** mul[1]; 
console.log(res);

//Answer 
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10))); //parseInt의 10은 10진수로 나타내달라는 의미 
