from typing import Optional

# 아 이거 리스트 뒤집기 기억 안나는디???
# 곤란하구만..
# from chatGPT
# 1. 현재 노드(curr)를 head 로 초기화하고, 이전 노드(prev)를 null 로 초기화합니다.
# 2. curr 노드가 null 일 때까지 반복합니다.
# 3. curr 노드의 다음 노드(next)를 temp 에 저장합니다.
# 4. curr 노드의 다음 노드를 prev 로 지정합니다.
# 5. prev 노드를 curr 로 지정합니다.
# 6. curr 노드를 temp 로 지정합니다.
# 7. 2단계로 돌아가서, curr 노드가 null 이 될 때까지 반복합니다.
# 8. 마지막으로, prev 노드를 새로운 헤드로 반환합니다.
# 이 함수는 노드를 한 번만 순회하므로, 시간 복잡도는 O(n)입니다.

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    # left - right 구간을 reverse.
    # 일단, reverse 를 어떻게 해야함?
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        curr = head
        prev = None
        idx = 1

        while curr:
            # 지금의 curr 이지. 그러면 이게 ㅇ래 while 안으로 갔을 땐 2 가 될 것이고요.
            reverse_curr = curr
            reverse_prev = prev  # 이건 None 이고, 끝에는 끝 다음 노드를 가리켜야 하는데.

            if left <= idx and idx <= right:
                # reverse
                # 2 가 들어왔을 때
                temp = reverse_curr.next  # 얘는 3
                reverse_curr.next = reverse_prev  # 얘는 None. 즉 curr.next 는 None
                reverse_prev = reverse_curr  # prev 는 curr 즉 2
                reverse_curr = temp  # 얘는 3
                curr = temp
                idx += 1

            # update pointer
            curr = curr.next
            prev = curr
            idx += 1

        return head

    def reverseBetween2(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)  # 0(dummy) 1 2 3 4 5
        curr = head  # 0(dummy) 1(curr) 2 3 4 5
        prev = dummy  # 0(dummy, prev) 1(curr) 2 3 4 5

        # 여기서부터 다시 들어야겠다. 집중력 끝. https://www.youtube.com/watch?v=RF_M9tX4Eag 4:14
        for i in range(left - 1):
            prev = curr
            curr = curr.next

        return head

    def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        prev = None

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        return prev

    def printNode(self, head: ListNode) -> ListNode:
        curr = head
        while curr:
            print(curr.val)
            curr = curr.next


node = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
sol = Solution()
sol.printNode(node)
