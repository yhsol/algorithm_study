from typing import Optional

# 링크드 리스트에서 홀수 그룹, 짝수 그룹으로 묶고,
# 홀수 그룹 - 짝수 그룹 순서로 오더링.
# 첫 번째 노드는 홀수, 두 번째 노드는 짝수로 간주됩니다.
# 각 그룹 내부 순서는 기존 리스트 순서 그대로여야 함.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 1 - 2 - 3 - 4 - 5 => 1 - 3 - 5 - 2 - 3
# 1 2 3 4 5 -> 2 랑 3 바꾸기
# 1 3 2 4 5 -> 여기서 2, 4 랑 5 를 바꿔야 함. 그냥 하나씩 스왑이야 한다고 치더라도 뭉탱이로 스왑을 어떻게 할까.
# 1 3 5 2 4
# curr 의 next 를 curr.next.next 로 하고
# curr.next 는 curr.next.next 로
# odd 리스트, even 리스트 만들고 합치면 안됨? 합치기 어떻게 해야함?
# tail 이라도 알면 even 을 tail 에 붙여가면 될 텐데..
# 인덱스가 정해져있으니까.. 이걸 쓸 데가 있을 것 같은데..
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 단순하게 접근하면 더 접근하기 쉬웠을 듯?
        # haed 는 홀수고 head.next 는 짝수임. 여기서 출발.
        odd = head
        even = head.next
        # 여기서 even 의 head 를 가지고 있어야 한다는걸 떠올리는게 어려워. 이런 생각은 어떻게 전개가 되는거지.
        even_head = head.next

        while even and even.next:
            odd.next = odd.next.next
            odd = odd.next

            even.next = even.next.next
            even = even.next

        # 여기서 합치는걸 어떻게 하더라?
        # 아 지금 odd 는 계속 바껴왔구나. 여기가 지금 tail 이네. 리턴해야하는 건 head 이고. odd 도 포인터인것.
        odd.next = even_head

        return head