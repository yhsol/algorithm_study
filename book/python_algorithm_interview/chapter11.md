# 해시 테이블

해시 테이블 또는 해시 맵은 키를 값에 매핑할 수 있는 구조인, 연관 배열 추상 자료형(ADT)을 구현하는 자료구조다.

해시 테이블의 가장 큰 특징은 대부분의 연산이 분할 상환 분석에 따른 시간 복자바도가 O(1)이라는 점이다.
덕분에 데이터 양에 관계 없이 빠른 성능을 기대할 수 있다는 장점이 있다.

## 해시

해시 함수란 임의 크기 데이터를 고정 크기 값으로 매핑하는 데 사용할 수 있는 함수를 말한다.

해시 데이블의 핵심은 해시 함수다. 여기서 입력값은 ABC, 1324BC, AF32B로 각각 3글자, 6글자, 5글자이지만,
화살표로 표시한 특정 함수를 통과하면 2바이트의 고정 크기 값으로 매핑된다.
여기서 화살표 역할을 하는 함수가 바로 해시 함수다.

```
ABC -> A1
1324BC -> CB
AF32B -> D5
```

해시 테이블을 인덱싱하기 위해 이처럼 해시 함수를 사용하는 것을 해싱(Hashing)이라 하며,
해싱은 정보를 가능한 한 빠르게 저장하고 검색하기 위해 사용하는 중요한 기법 중 하나다.

해싱은 최적의 검색이 필요한 분야에 사용되며, 심볼 테이블(일반적으로 해시 테이블로 구현된다) 등의 자료구조를 구현하기에도 적합하다.

이외에도 해시 함수는 체크섬(Checksum), 손실 압축, 무작위화 함수(Randomization Function), 암호 등과도 관련이 깊으며 때로는 서로 혼용하기도 한다.
그러나 어느 정도는 개념이 겹치긴 하지만,
서로 용도와 요구사항이 다른 만큼 각각 다르게 설계되고 최적화된다.

- 성능 좋은 해시 함수들의 특징
  - 해시 함수 값 충돌의 최소화
  - 쉽고 빠른 연산
  - 해시 테이블 전체에 해시 값이 균일하게 분포
  - 사용할 키의 모든 정보를 이용하여 해싱
  - 해시 테이블 사용 효율이 높은 것

## 비둘기집 원리

28. 해시맵 디자인

문제: 다음의 기능을 제공하는 해시맵을 디자인하라.

- put(key, value): 키, 값을 해시맵에 삽입한다. 만약 이미 존재하는 키라면 업데이트한다.
- get(key): 키에 해당하는 값을 조회한다. 만약 키가 존재하지 않느다면 -1을 리턴한다.
- remove(key): 키에 해당하는 키, 값을 해시맵에서 삭제한다.

풀이1. 개별 체이닝 방식을 이용한 해시 테이블 구현

```py
class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)

    def put(self, key: int, value: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        p = self.table[index]
        while p:
            if p.key == key:
                p.value = value
                return
            if p.next is None:
                break
            p = p.next
        p.next = ListNode(key, value)

    def get(self, key: int) -> int:
        index = key % self.size
        if self.table[index].value is None:
            return - 1
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    def remove(self, key: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            return

        # 인덱스의 첫 번째 노드일 때 삭제 처리
        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return

        # 연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, next
```
