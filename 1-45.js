/*
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
이를 이용하여 현재 연도(2020)를 출력해보세요.
*/

//My Answer 
let now = new Date(); 
let currentSecond = now.getTime(); 
let currentYear = 1970 + Math.floor(currentSecond/31536000000);
console.log(currentYear); 

//Answer 
const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);
