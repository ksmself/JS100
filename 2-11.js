/*
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
*/

//My Answer 
function compressWord(){
  const word = prompt("문자열을 입력해주세요.").split(""); 
  let wordObj = {}; 
  let compressed = ""; 
  word.forEach(words => {
    if(wordObj[words]){
      wordObj[words]++; 
    } else{
      wordObj[words] = 1; 
    }
  });
  for(let key in wordObj){
    compressed += key + wordObj[key];
  }
  return compressed;
}

console.log(compressWord());

//Answer 
const user_input = new String(prompt('문자열을 입력하세요'));
let s = '';
let storeString = user_input[0];
let count = 0;

for (let i of user_input){
  if (i === storeString){
    count += 1;
  } else{
    s += storeString + String(count);
    storeString = i;
    count = 1;
  }
}

s += storeString + String(count);
console.log(s);
