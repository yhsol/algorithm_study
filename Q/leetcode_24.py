from typing import Optional

# dummy 노드 생성 -> 현재 1 가리킨다.
# 스왑을 두개씩 끊어야 함.
# 1 을 prev 로, 2 를 curr 로 두었을 때,
# 1 의 next 는 3 이 돼야함. 2 의 next 는 1 이 돼야함.
# 그러고는 각각의 prev, curr 포인터가 3, 4 로 이동해야함.
# 그리고 노드가 바뀌고 더비 노드가 가리키는건 2 여야 함.


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 1 - 2 - 3 - 4
# dummy(prev) - head(curr)
# (prev) - 1(curr) - 2 - 3 - 4
# nextPair = curr.next.next -> 3
# second = curr.next -> 2
# second.next = curr -> 1
# curr.next = nextPair -> 3
# prev.next = second -> 2
# prev = curr -> 1
# curr = nextPair -> 3
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev, curr = dummy, head

        # 두 개의 노드를 확보한 뒤에 스왑해야하니까 curr 와 함께 curr.next 까지 확인됐을 때 반복 진행.
        while curr and curr.next:
            # save pointers
            nextPair = curr.next.next
            second = curr.next

            # reverse this pair of nodes
            # second 의 넥스트를 첫번째 노드 즉 curr 로 스왑
            second.next = curr
            # curr 는 스왑이 됐고, curr 노드의 넥스트를 다음 노드 즉 nextPair 로 스왑
            curr.next = nextPair
            prev.next = second

            # update pointers
            prev = curr
            curr = nextPair

        return dummy.next

class Solution2:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head

        while curr and curr.next:
            curr.val, curr.next.val = curr.next.val, curr.val
            curr = curr.next.next

        return head