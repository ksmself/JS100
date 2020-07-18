/*
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
입력: 거꾸로
출력: 로꾸거 
*/

//My Answer 
const s = prompt("문장을 입력해주세요."); 
let reverse = ""; //reverse는 추가될 것이므로 const 대신 let 사용 
for(var i = s.length - 1; i >= 0; i--){
  reverse += s[i]; 
}
console.log(reverse); 

//Answer 
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);
