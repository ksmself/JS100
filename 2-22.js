/*
너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 
그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다. 다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

데이터
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

출력
E D A F C B
*/ 

//My Answer 
function bfs(){
  const graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F']
  }; 
  let res = ""; 
  const first = 'E'; 
  let now = first; 
  res += first; 
  while(res.length != 6){
    for(let i = 0; i < graph[now[0]].length; i++){
      if(!res.includes(graph[now[0]][i])){
        res += graph[now[0]][i]; 
        now += graph[now[0]][i]; 
      }
    }
    now = now.slice(1); 
  }
  console.log(res.split("").join(" "));
}

bfs();

//Answer 
const graph = {
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
  'E': ['D', 'A'],
  'F': ['D'],
};

function bfs(graph, start){
  let visited = [];
  let queue = [start];

  while (queue.length !== 0){
    let n = queue.shift();
    if (!visited.includes(n)){
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for(let i of sub){
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(bfs(graph, 'E'));
