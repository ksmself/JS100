/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/ 

//My Answer 
function checkPrimeNum(){
  const n = parseInt(prompt("숫자를 입력하세요"), 10);
  for(let i = 2; i < n; i++){
    if(n % i == 0){
      return "NO"; 
    }
  }
  return "YES";
}

console.log(checkPrimeNum());  

//Answer 
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);
