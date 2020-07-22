/*
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
*/

//My Answer: 5번

//Answer: 3번과 5번 

/*
arr[i]의 경우, 주어진 위치에 있는 원소를 찾는 것이므로, 시간복잡도는 O(1)이다. 
push의 경우, 배열을 순회할 필요 없이 단순히 배열의 가장 끝에 특정 element를 추가하기만 하면 되기 때문에, 시간복잡도는 O(1)이다. 
pop도 배열 순회 없이 가장 마지막 element를 제거하면 되므로 마찬가지로 시간복잡도는 O(1)이다.
splice는 배열의 중간에 특정 element를 넣는 것인데, element가 삽입된 이후부터는 모두 순회하면서 index 재부여가 필요하다. worst 케이스, 
즉 배열의 가장 앞에 splice 메소드로 element가 삽입될 수도 있다고 가정할 때, splice 또한 시간복잡도는 O(n)이다.
slice도 배열을 복사하는 것이기 때문에 최악의 경우, 전체 배열을 복사해야 하기 때문에 slice의 시간복잡도는 O(n)이다. 
*/
