/*
학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/ 

//My Answer 
const time = prompt("버스 시간표를 입력하세요").split(" "); 
const current = prompt("현재 시간을 입력해주세요").split(":");
let seperated = [];
let res = [];
let left; 
const currentNum = current.map(cur => parseInt(cur, 10));
time.forEach(times => {
  seperated = times.split(":").map(cur => parseInt(cur, 10)); 
  left = 60 - currentNum[1] + seperated[1]; 
  if(seperated[0] < currentNum[0]){
    res.push("지나갔습니다"); 
  } else if(seperated[0] === currentNum[0]){
    if(seperated[1] < currentNum[1]){
      res.push("지나갔습니다");
    } else{
      res.push(`00시간 : ${left}분`); 
    }
  } else{
    if(seperated[0] - currentNum[0] < 10){
      res.push(`0${seperated[0] - currentNum[0]}시간 : ${left}분`);
    } else{
      res.push(`${seperated[0] - currentNum[0]}시간 : ${left}분`);
    }
    
  }
});
console.log(res);

//Answer 
function sol(tb, rt){
  let answer = [];
  rt = rt.split(':').map(n => parseInt(n, 10));

  for (let i=0; i<tb.length; i++){
    let time = tb[i].split(':').map(n => parseInt(n, 10));
    let time_to_min = ((time[0]*60) + time[1]) - ((rt[0]*60) + rt[1]);

    if (time_to_min < 0){
      answer.push('지나갔습니다');
    } else {
      let a = parseInt((time_to_min)/60, 10);
      let b = (time_to_min) % 60;
      answer.push(String(a).padStart(2, 0)+'시간 '+String(b).padStart(2, 0)+'분'); //padStart를 사용하여 2자리를 만족하지 않을 경우 0을 채워넣음 
    }
  }
  return answer;
}

console.log(sol(["12:30", "13:20", "14:13"], "12:40"));
