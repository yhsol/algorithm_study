# leetcode 2

문제 번호가 2 인데 어려워서 당황스럽다.

needcode 참고.

두개의 연결 리스트를 더하는 문제이다.

조건은 non-empty, non-negative, digits are stored in reverse order.

여기서 역순 리스트라는건 언뜻 까다로워 보이지만 그냥 하나하나 더해나가는 풀이라면 오히려 도움이 된다.

당장의 것을 더하고, 자리올림값은 다음으로 넘기는 식으로, 자연스러운 덧셈의 과정을 따르게 된다.

알고리즘은 차례차례 더해나간다 + 자리올림(carry) 를 잘 처리한다. 정도이다.

예시는 2-4-3-1, 5-6-4 라는 링크가 주어진다고 가정.

두개의 리스트를 순회하면서 덧셈을 하면 된다.

```bash
  2 4 3 1
+ 5 6 4
```

덧셈을 진행하면,

첫번째 자리 덧셈 -> 7
두번째 자리 덧셈 -> 0 & carry (1)
세번째 자리 덧셈 -> 8
네번째 자리 덧셈 => 한쪽에 숫자가 없으니까 0 이라고 간주하고 0 + 1 진행 -> 1

여기서 나온 엣지 케이스 하나. 두 리스트의 사이즈가 다를 경우.

다른 하나. carry 다루기. 7 + 8 을 한다면 그 자리의 결과는 5 이고, carry 는 1 임. 그러면 그 앞자리에 carry 를 넘겨서 1을 처리해줘야한다.

문제 풀이:

더미 노드를 생성해서 제출할 리스트를 만들어 나간다. 순회를 진행할 때 사용할 curr 포인터를 생성하고 더미 노드를 가리키도록 한다. 반복을 진행하는데, 조건은 l1 또는 l2 가 있는 동안으로 한다. 더할 값들에 대한 정제가 필요하다. 노드의 val 을 사용하되, 없다면 0 을 사용하도록 한다. carry 를 관리할 변수를 생성하고 0을 기본값으로 한다. 덧셈값을 저장할 변수를 만들고 덧셈을 한다. v1 + v2 를 해주고 여기에 carry 도 더해주면 된다. 이 값에는 carry 값도 포함되어 있기 때문에 알맞게 추출해야 한다. carry 는 덧셈값을 10으로 나눈 몫이 되고, 덧셈값은 10으로 나눈 나머지가 된다. carry 는 carry 변수가 갖고 있고, 덧셈값은 [curr.next](http://curr.next) 에 insert 한다. 덧셈 관련 작업은 처리가 되었으니 포인터를 업데이트 한다. curr, l1, l2 를 업데이트 하는데 l1, l2 의 next 에 대한 null 처리가 필요하다. 이렇게 되면 다 된 것 같지만 엣지 케이스가 남아있다. 예를 들어 7, 8 이라는 두 리스트를 더한다고하면 지금까지의 과정으로는 5 만 처리되고 carry 인 1 은 버려지게 됨. 이 carry 도 처리해주기 위해 반복문 조건에 ‘carry 가 있는 동안’ 도 추가한다. carry 가 있으면 다시 반복문이 돌고, l1, l2 가 없다면 0, 0 이기 때문에 0 + 0 + carry 로 처리된다.