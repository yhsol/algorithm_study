# 우선 순위 큐 (Priority Queues)

큐가 FIFO (First-In First-Out) 방식을 따르지 않고
원소들의 우선순위에 따라 큐에서 빠져나오는 방식

서로 다른 두 가지 방식이 가능할 듯:

1.  Enqueue 할 때 우선순위 순서를 유지하도록
2.  Dequeue 할 때 우선순위 높은 것을 선택

-> 어느 것이 더 유리할까?  
-> 1번이 조금 더 유리  
-> 1번과 같이 queue 에 무작위로 들어있다면 꺼낼 때 queue에 있는 모든 원소를 살펴봐야 함
-> 2번은 정렬된 원소들이 쌓이기 때문에 모든 원소를 살펴보지는 않아도 됨.

서로 다른 두 가지 재료를 이용할 수 있음:

1. 선형 배열 이용
2. 연결 리스트 이용

-> 어는 것이 더 유리할까?
-> 시간적으로 볼 때는 연결 리스트 이용이 많이 유리
-> enequeue 를 할 때 정렬한다고 하면 중간에 끼워넣거나 하는 일이 생길것이므로!
-> 공간적으로 보면 선형 배열이 공간을 덜 차지함
-> 시간적으로 유리한 것을 택하는 경우가 많기 때문에 여기서도 연결 리스트 이용

## 우선순위 큐의 초기화

```py
from doublylinkedlist import Node, DoublyLinkedList

class PriorityQueue:    # 양방향 연결 리스트를 이용하여
                        # 빈 큐를 초기화
    def __init__(self, x):
        self.queue = DoublyLinkedList()

    def enqueue(self, x):
        newNode = Node(x)
        curr = [빈칸]   # curr 라는 포인터는 어떻게 정하지? nodeCount 를 쓰나 ? 아니면 그냥 처음부터 ? head ?
        while [빈칸] and [빈칸]: # queue 의 전체 길이보다 작고, curr.next 가 newNode 보다 우선순위가 높지 않은 동안 반복?
            # 1. 끝을 만나지 않았을 조건
            # 2. 우선순위 비교 조건
            curr = curr.next
        self.queue.[빈칸](curr, newNode)    # insertAt ? insertAfter ? insertBefore => 비교를 curr 랑 할지 (curr 가 newNode 보다 더 크면 curr before) curr.next 랑 할지 (curr.next 가 newNode 보다 더 크면 curr after) 를 쓰면 될 듯
```
