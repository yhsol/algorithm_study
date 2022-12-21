import collections
from typing import Deque, List


class Node:
    def __init__(self, value):
        self.val = value
        self.next = None
        self.prev = None


class ListNode:
    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None)
        self.tail = Node(None)
        self.head.prev = None
        self.head.next = self.tail
        self.tail.prev = self.head
        self.tail.next = None


class Solution:
    def __init__(self):
        self.result = None

    def isPalindrome(self, head: ListNode) -> bool:
        q: Deque = collections.deque()

        if not head:
            return True

        node = head

        while node is not None:
            q.append(ndoe.val)
            node = node.next

        while len(q) > 1:
            if q.popleft() != q.pop():
                return False

        return True

    def isPalindromeRunner(self, head: ListNode) -> bool:
        rev = None
        slow = fast = head

        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next

        if fast:
            slow = slow.next

        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next

        return not rev
