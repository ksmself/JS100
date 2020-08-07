/*
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/ 

//My Answer
function comma(){
  let number = prompt("숫자를 입력해주세요").split("").reverse();
  if(number.length > 3){
   for(let i = 2; i < number.length - 1; i += 3){
     number.splice(i, 0, ',');
   }
  }
  const numbers = number.reverse().join("");
  console.log(numbers); 
}

comma();

//Answer 
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());
