/*
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/ 

//My Answer 
function day(a, b){
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0; 
  for(let i = 0; i <12; i++){
    if(i + 1 >= a){
      sum += b; 
      break; 
    }
    sum += month[i]; 
  }
  switch(sum % 7){
    case 0: 
     return "TUE";
     break;
    case 1:
     return "WED";
     break;
    case 2:
     return "THU";
     break;
    case 3:
     return "FRI";
     break;
    case 4:
     return "SAT";
     break;
    case 5:
     return "SUN";
     break;
    case 6:
     return "MON";
  }
} 

console.log(day(7, 27));

//Answer 
const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));
